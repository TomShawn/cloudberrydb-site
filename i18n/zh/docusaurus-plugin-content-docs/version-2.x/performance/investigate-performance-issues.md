---
title: 如何排查性能问题
---

，可以借助 `ps`、`top`、`iostat`、`vmstat`、`netstat` 等常见的系统监控工具。借助这些工具，你可以轻易找出当前正在运行的 Apache Cloudberry 进程（即 `postgres` 进程），并定位到那些消耗 CPU、内存、磁盘I/O或网络资源最多的任务。通过分析这些系统统计数据，你就能揪出那些因过度消耗资源而拖慢系统性能的查询。

更方便的是，你可以使用 Apache Cloudberry 的管理工具 `gpssh`，在所有主机上同时运行这些监控命令。

你也可以创建并使用 Apache Cloudberry 的 `session_level_memory_consumption` 视图，该视图提供了正在运行查询的会话的当前内存利用率和空闲时间等信息。有关该视图的更多信息，请参阅[查看会话内存使用信息](../sys-admin/check-database-system.md)。

## 排查有问题的查询

当某个查询性能不佳时，分析它的查询计划是排查问题的关键。使用 `EXPLAIN` 命令就能获取任何查询的执行计划。有关解读查询计划和识别问题的更多信息，请参阅[分析查询性能](./optimize-queries/analyze-query-performance.md)。

当查询执行期间发生内存不足事件时，Apache Cloudberry 的内存核算框架会详细记录下事件发生时每个正在运行的查询的内存消耗情况。这些信息会被写入 Apache Cloudberry 的 Segment 日志中。

## 调查错误消息

Apache Cloudberry 的日志都存放在 Coordinator 或 Segment 的数据目录下的 `log` 文件夹里。排查问题时，应优先查看 Coordinator 的日志，因为它的信息最全。日志文件每天会进行轮转，并采用 `gpdb-YYYY-MM-DD_hhmmss.csv` 的命名约定。要找到 Coordinator 主机上的日志文件，可以执行：

```shell
$ cd $COORDINATOR_DATA_DIRECTORY/log
```

日志行的格式如下：

```shell
<timestamp> | <user> | <database> | <statement_id> | <con#><cmd#> 
|:-<LOG_LEVEL>: <log_message>
```

你应当重点关注 `WARNING`、`ERROR`、`FATAL` 或 `PANIC` 这几个级别的日志。为了方便搜索，Cloudberry 提供了 `gplogfilter` 工具，可以高效地筛选日志文件。例如，在 Coordinator 主机上运行以下命令，即可检查标准日志位置中的问题日志：

```shell
$ gplogfilter -t
```

如果需要进一步在所有 Segment 的日志中查找相关条目，可以通过 `gpssh` 在所有 Segment 主机上运行 `gplogfilter`。利用 `statement_id` 或 `con#`（会话标识符）可以很方便地将分布在各处的日志关联起来。例如，要在所有 Segment 日志中搜索包含字符串 `con6` 的条目并将输出保存到文件：

```shell
gpssh -f seg_hosts_file -e 'source 
/usr/local/cloudberry-db/greenplum_path.sh ; gplogfilter -f 
con6 /gpdata/*/log/gpdb*.csv' > seglog.out
```