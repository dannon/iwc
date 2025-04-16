<script setup lang="ts">
import type { Workflow } from "~/models/workflow";
import { formatDate } from "~/utils/";

defineProps<{
    workflow: Workflow;
    compact?: boolean;
}>();
</script>
<template>
    <UCard
        :id="`workflow-${workflow.definition.uuid}`"
        variant="outline"
        class="flex flex-col"
        :class="compact ? 'h-96 shadow-md hover:shadow-lg transition-shadow rounded-lg' : 'mb-6'"
        :ui="{
            header: compact ? 'p-3' : 'px-6 py-4',
            body: compact ? 'px-3 py-2 flex-1 flex flex-col' : 'px-6 py-2 flex-1 flex flex-col',
            footer: compact ? 'p-3' : 'px-6 py-2'
        }">
        <template #header>
            <ULink :to="`/workflow/${encodeURIComponent(workflow.iwcID)}/`">
                <h2 :class="`font-bold hover:underline text-black dark:text-black ${compact ? 'text-lg' : 'text-xl mb-2'}`">
                    {{ workflow.definition.name }}
                </h2>
            </ULink>
        </template>

        <div class="flex flex-col flex-grow">
            <p :class="`flex-grow ${compact ? 'text-sm line-clamp-6 mb-2' : 'mb-4'}`">
                {{ workflow.definition.annotation }}
            </p>

            <div v-if="workflow.collections && workflow.collections.length > 0 && !compact">
                <UBadge v-for="collection in workflow.collections" :key="collection" class="mr-2 mb-2 bg-hokey-pokey text-black" variant="solid">
                    {{ collection }}
                </UBadge>
            </div>
            <div v-else-if="workflow.collections && workflow.collections.length > 0 && compact">
                <UBadge
                    v-for="collection in workflow.collections.slice(0, 2)"
                    :key="collection"
                    class="mr-1 mb-1 bg-hokey-pokey text-black"
                    variant="solid">
                    {{ collection }}
                </UBadge>
                <UBadge v-if="workflow.collections.length > 2" variant="solid" class="mr-1 mb-1 bg-hokey-pokey text-black">
                    +{{ workflow.collections.length - 2 }}
                </UBadge>
            </div>
        </div>

        <template #footer>
            <div :class="`flex justify-between ${compact ? 'text-xs' : 'text-xs'}`">
                <p class="flex items-center">
                    <Icon name="uil:tag" :class="compact ? 'mr-1 w-3 h-3' : 'mx-1'" />
                    {{ workflow.definition.release }}
                </p>
                <p class="flex items-center">
                    <Icon name="uil:clock-two" :class="compact ? 'mr-1 w-3 h-3' : 'mx-1'" />
                    Updated on
                    {{ formatDate(workflow.updated) }}
                </p>
            </div>
        </template>
    </UCard>
</template>