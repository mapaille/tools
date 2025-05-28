<script setup lang="ts">
  import SectionContainer from '../components/SectionContainer.vue';
  import VerticalLayout from '../components//VerticalLayout.vue';
</script>

<template>
  <h2>SQL</h2>
  <SectionContainer title="How to find query id from query text">
    <pre wrap>
SELECT 
    qsq.query_id,
    qsq.last_execution_time,
    qsqt.query_sql_text
FROM sys.query_store_query qsq
    INNER JOIN sys.query_store_query_text qsqt
        ON qsq.query_text_id = qsqt.query_text_id
WHERE
    qsqt.query_sql_text LIKE '%your query text%';
  </pre>
  </SectionContainer>
<SectionContainer title="How to find unused indexes">
  <pre wrap>
SELECT
    objects.name AS Table_name,
    indexes.name AS Index_name,
    dm_db_index_usage_stats.user_seeks,
    dm_db_index_usage_stats.user_scans,
    dm_db_index_usage_stats.user_updates
FROM
    sys.dm_db_index_usage_stats
    INNER JOIN sys.objects ON dm_db_index_usage_stats.OBJECT_ID = objects.OBJECT_ID
    INNER JOIN sys.indexes ON indexes.index_id = dm_db_index_usage_stats.index_id AND dm_db_index_usage_stats.OBJECT_ID = indexes.OBJECT_ID
WHERE
    AND
    dm_db_index_usage_stats.user_lookups = 0
    AND
    dm_db_index_usage_stats.user_seeks = 0
    AND
    dm_db_index_usage_stats.user_scans = 0
ORDER BY
    dm_db_index_usage_stats.user_updates DESC;
  </pre>
</SectionContainer>
</template>

<style scoped>
</style>
