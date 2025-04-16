export default defineAppConfig({
    site: {
        name: "Galaxy IWC",
        defaultDescription: "Scientific workflows by the Intergalactic Workflow Comission (IWC).",
        keywords: ["Galaxy Project", "Workflow", "Intergalactic Workflow Comission", "Bioinformatics"],
    },
    ui: {
        primary: 'hokey-pokey',
        neutral: 'ebony-clay',
        card: {
            variants: {
                variant: {
                    solid: {
                        root: 'bg-white dark:bg-white text-neutral-900 dark:text-neutral-900'
                    },
                    outline: {
                        root: 'bg-white dark:bg-white text-neutral-900 dark:text-neutral-900 ring-1 ring-neutral-200 dark:ring-neutral-200 divide-y divide-neutral-200 dark:divide-neutral-200'
                    },
                    soft: {
                        root: 'bg-white dark:bg-white text-neutral-900 dark:text-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-200'
                    },
                    subtle: {
                        root: 'bg-white dark:bg-white text-neutral-900 dark:text-neutral-900 ring-1 ring-neutral-200 dark:ring-neutral-200 divide-y divide-neutral-200 dark:divide-neutral-200'
                    }
                }
            },
            defaultVariants: {
                variant: 'outline'
            }
        },
        badge: {
            variants: {
                color: {
                    primary: 'bg-hokey-pokey text-black',
                    neutral: 'bg-ebony-clay text-white',
                    success: 'bg-green-500 text-white',
                    info: 'bg-blue-500 text-white',
                    warning: 'bg-yellow-500 text-black',
                    error: 'bg-red-500 text-white'
                }
            }
        }
    },
});
