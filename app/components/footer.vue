<template>
    <footer class="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
        <aside class="grid-flow-col items-center">
            <p>Copyright © {{ new Date().getFullYear() }} Chris Gardiner-Bill - All right reserved</p>
        </aside>
        <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a>
                <Icon name="uil:linkedin" size="24" class="fill-current" />
            </a>
            <a>
                <Icon name="uil:github" size="24" class="fill-current" />
            </a>
        </nav>
    </footer>
</template>