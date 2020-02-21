<script>
  // import { _ } from 'svelte-i18n'
</script>

<style>
.section--hero {
    background-image: url("https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80");
}

.showcase--grid {
    height: 650px;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, minmax(250px, 1fr));
    grid-auto-rows: repeat(2, 1fr);
    grid-gap: 2rem;
    grid-template-areas: "a b"
                        "a c";
}

.showcase--item__big {
    grid-area: a;
    background-image: url("https://images.unsplash.com/photo-1514454923228-7ef54f9251c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80");
}
.showcase--item__small_top {
    grid-area: b;
    background-image: url("https://images.unsplash.com/photo-1504780361545-d1ce834be3a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80");
}
.showcase--item__small_bottom {
    grid-area: c;
    background-image: url("https://images.unsplash.com/photo-1492138786289-d35ea832da43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
}

.showcase--item__overlay {
    background: rgba(255,255,255, 0.7);
    background: linear-gradient(180deg, rgba(255,255,255,0) 65%, rgba(0,0,0,0.8) 100%);
}

.section--feature {
    background-image: url("https://www.malaikamediaug.com/wp-content/uploads/2018/10/Documentary_photographers_Uganda-1150x600.jpg");
}

.bg-white-transparent {
    background-color: rgba(255,255,255, 0.9);
}

.section--contact {
    min-height: 400px;
    height: 500px;
}

.contact--item-map {
    background-image: url("https://images.unsplash.com/photo-1563558603156-1e0f5d0592a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
}

.contact-icon {
    width:100px;
    height:auto;
}

@media (max-width: 1024px) {
    .showcase--grid {
        overflow: hidden;
        height: 100%;
        width: 100%;
        grid-template-rows: auto;
        grid-template-areas: none;

    }

    .showcase--item__big {
        height: 16rem;
        grid-column: 1 / -1;
        grid-row: 1;
    }
    .showcase--item__small_top {
        height: 16rem;
        grid-column: 1 / -1;
        grid-row: 2;
    }
    .showcase--item__small_bottom {
         height: 16rem;
        grid-column: 1 / -1;
        grid-row: 3;
    }

    .section--feature {
        height: 100%;
    }
}

</style>


<section class="section--feature bg-cover bg-center py-20">
           <div class="container mx-auto px-4 flex h-full items-center">
               <div class="w-full md:w-2/3 lg:w-1/2 h-full bg-white-transparent md:p-16 p-4 rounded-lg text-center">
                   <h2 class="font-serif text-3xl text-black mb-8">What we do</h2>
                   <p class="font-sans text-md mb-8 leading-relaxed">
                   Relief Care Uganda has continued collaborating with other organizations, CSOs and government entities as it executes its community activities. Under the Relief Care Uganda-Education Project (RCU-EP) and by close of year 2016, we registered 53 orphaned and vulnerable children of which 30 are double orphaned and in Pre primary school, 20 are single orphaned and are in primary level and 3 have parents but very poor to support the children, these are also on secondary level
                   </p>
                   <button class="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">
                  About US
                   </button>
               </div>
           </div>
       </section>
