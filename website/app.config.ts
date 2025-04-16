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
                        root: 'bg-ebony-clay-900 dark:bg-ebony-clay-900 text-white dark:text-white'
                    },
                    outline: {
                        root: 'bg-ebony-clay-900 dark:bg-ebony-clay-900 text-white dark:text-white ring-1 ring-ebony-clay-800 dark:ring-ebony-clay-800 divide-y divide-ebony-clay-800 dark:divide-ebony-clay-800'
                    },
                    soft: {
                        root: 'bg-ebony-clay-900 dark:bg-ebony-clay-900 text-white dark:text-white divide-y divide-ebony-clay-800 dark:divide-ebony-clay-800'
                    },
                    subtle: {
                        root: 'bg-ebony-clay-900 dark:bg-ebony-clay-900 text-white dark:text-white ring-1 ring-ebony-clay-800 dark:ring-ebony-clay-800 divide-y divide-ebony-clay-800 dark:divide-ebony-clay-800'
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
