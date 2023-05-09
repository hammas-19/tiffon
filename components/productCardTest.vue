<template>
<a href="#" class="block group">
  <img
    src="https://cdn.shopify.com/s/files/1/1752/8007/collections/accessories.jpg?v=1676716695&width=1500"
    alt=""
    class="h-[350px] w-full object-cover sm:h-[450px] md:rounded-2xl rounded-lg"
  />

  <div class="mt-1.5">
    <p class="text-xs text-gray-500">Space Grey</p>

    <div class="mt-1.5 flex gap-1">
      <form>
        <fieldset>
          <legend class="sr-only">Color</legend>
        </fieldset>

        <div
          class="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75"
        >
          <div>
            <input type="checkbox" id="ColorSg" class="sr-only" />

            <label
              for="ColorSg"
              class="block h-4 w-4 cursor-pointer rounded-full bg-[#595759] transition hover:!opacity-100"
            >
              <span class="sr-only"> Space Gray </span>
            </label>
          </div>

          <div>
            <input type="checkbox" id="ColorS" class="sr-only" />

            <label
              for="ColorS"
              class="block h-4 w-4 cursor-pointer rounded-full bg-[#d2d3d4] transition hover:!opacity-100"
            >
              <span class="sr-only"> Silver </span>
            </label>
          </div>

          <div>
            <input type="checkbox" id="ColorP" class="sr-only" />

            <label
              for="ColorP"
              class="block h-4 w-4 cursor-pointer rounded-full bg-[#d89f97] transition hover:!opacity-100"
            >
              <span class="sr-only"> Pink </span>
            </label>
          </div>

          <div>
            <input type="checkbox" id="ColorG" class="sr-only" />

            <label
              for="ColorG"
              class="block h-4 w-4 cursor-pointer rounded-full bg-[#afbfab] transition hover:!opacity-100"
            >
              <span class="sr-only"> Pink </span>
            </label>
          </div>

          <div>
            <input type="checkbox" id="ColorSb" class="sr-only" />

            <label
              for="ColorSb"
              class="block h-4 w-4 cursor-pointer rounded-full bg-[#91a5bb] transition hover:!opacity-100"
            >
              <span class="sr-only"> Pink </span>
            </label>
          </div>
        </div>
      </form>
    </div>

    <div class="flex justify-between mt-3 text-sm">
      <h3
        class="text-gray-900 group-hover:underline group-hover:underline-offset-4"
      >
        Small Headphones
      </h3>

      <p class="text-black bg-bisonHide px-3 py-[2px] rounded-full">$299</p>
    </div>
  </div>
</a>
</template>

