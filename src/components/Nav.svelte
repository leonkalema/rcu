<script>
	export let segment;
    import { _, locale, locales } from 'svelte-i18n'
</script>

<style>
#menu-toggle:checked + #menu {
           display: block;
       }

       .dropdown:hover .dropdown-menu,
       .dropdown:active .dropdown-menu {
           display: block;
       }
.a {
    cursor: pointer;
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
  .lang{
      display: inline-flex;
  }
</style>


    <header class="lg:px-16 px-8 bg-black  py-4 md:py-0">
        <div class="container mx-auto flex flex-wrap items-center">
            <div class="flex-1 flex justify-between items-center">
                <a href="/" class="text-xl font-semibold text-yellow-100 hover:text-white tracking-normal">
<img class="object-scale-down h-33 w-1/4" src="http://reliefcareuganda.ug/wp-content/uploads/2017/05/logo-white.png" />
								</a>
            </div>

            <label for="menu-toggle" class="pointer-cursor md:hidden block">
                <svg class="fill-current text-gray-300 hover:text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    viewBox="0 0 20 20">
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label>
            <input class="hidden" type="checkbox" id="menu-toggle" />

            <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
                <nav>
                    <ul class="md:flex items-center justify-between text-base pt-4 md:pt-0">
                        <li><a class="md:px-4 py-2 md:py-4 px-0 block text-white hover:text-white md:hover:bg-rcu-yellow" href="/about">{$_('nav.about')}</a></li>
                        <li><a class="md:px-4 py-2 md:py-4 px-0 block text-white hover:text-white md:hover:bg-rcu-yellow" href="">{$_('nav.project')}</a></li>
                        <li><a class="md:px-4 py-2 md:py-4 px-0 block text-white hover:text-white md:hover:bg-rcu-yellow" href="">{$_('nav.get')}</a></li>
                        <li><a class="md:px-4 py-2 md:py-4 px-0 block text-white hover:text-white md:hover:bg-rcu-yellow" href="">{$_('nav.contact')}</a></li>
                        <li class="dropdown inline-block relative w-full md:w-auto md:mb-0 mb-2">
                            <a class="md:px-4 py-2 md:py-4 px-0 block text-green-100 hover:text-white md:hover:bg-green-800 inline-flex items-center">
                                <span class="mr-1">{$_('nav.dropdown')}</span>
                                <svg class="fill-current h-4 w-4 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                            </a>
                            <ul class="dropdown-menu absolute z-50 md:right-0 hidden text-gray-700 md:-mt-4 md:pt-3 pt-1 shadow-lg">
                                <li class=""><a class="rounded-t bg-white hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap"
                                        href="">Testing Link One</a>
                                </li>
                                <li class=""><a class="bg-white hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap"
                                        href="">Testing Link
                                        Two</a>
                                </li>
                                <li class=""><a class="rounded-b bg-white hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap"
                                        href="">Testing Link Three, Nice!</a></li>
                            </ul>
                        </li>
                        <ul class="lang">
                        {#each $locales as item}
                          <li style="padding-right: 3px;">
                            <span
                              class="a rounded-b bg-white hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap"
                              class:selected={$locale.includes(item)}
                              href={`#!${item}`}
                              on:click={() => ($locale = item)}>
                              {item.replace('-', '_')}
                            </span>
                          </li>
                        {/each}
                      </ul>
                    </ul>
                    
                </nav>
            </div>
        </div>
    </header>
