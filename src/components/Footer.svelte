<script>
    import { _, locale, locales } from 'svelte-i18n'
</script>


<style>
</style>

<footer class="lg:px-16 px-8 bg-black py-10 pb-15 shadow-md">

        <div class="container mx-auto flex flex-wrap">
            <div class="w-full md:w-3/6">

                <div class="text-green-100 mb-3 md:mb-0 pr-0 md:pr-10">
                    <span class="text-xl text-green-100">{$_('title.text')}</span>
                    <p class="text-sm mt-2">
                        {$_('footer.sub')}
                    </p>

                </div>

            </div>
            <div class="w-full md:w-1/6">

                <div class="text-green-100 mb-3 md:mb-0">
                    <span class="text-lg">Links 1</span>
                    <ul class="">
                        <li class="mt-2">
                            <a href="" class=" text-green-100 hover:text-white">FAQ</a>
                        </li>
                        <li class="mt-2">
                            <a href="" class=" text-green-100 hover:text-white">Help</a>
                        </li>
                        <li class="mt-2">
                            <a href="" class=" text-green-100 hover:text-white">Support</a>
                        </li>
                    </ul>
                </div>

            </div>
            <div class="w-full md:w-1/6">

                <div class="text-green-100 mb-3 md:mb-0">
                    <span class="text-lg">Links 2</span>
                    <ul class="">
                        <li class="mt-2">
                            <a href="" class=" text-green-100 hover:text-white">FAQ</a>
                        </li>
                        <li class="mt-2">
                            <a href="" class=" text-green-100 hover:text-white">Help</a>
                        </li>
                        <li class="mt-2">
                            <a href="" class=" text-green-100 hover:text-white">Support</a>
                        </li>
                    </ul>
                </div>

            </div>
            <div class="w-full md:w-1/6">

                <div class="text-green-100 mb-3 md:mb-0">
                    <span class="text-lg">Links 3</span>
                    <ul class="">
                        <li class="mt-2">
                            <a href="" class=" text-green-100 hover:text-white">FAQ</a>
                        </li>
                        <li class="mt-2">
                            <a href="" class=" text-green-100 hover:text-white">Help</a>
                        </li>
                        <li class="mt-2">
                            <a href="" class=" text-green-100 hover:text-white">Support</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

    </footer>
