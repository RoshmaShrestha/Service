<section className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-16 md:px-12 md:py-24 lg:px-20">
  <div className="mx-auto max-w-7xl">
    <x-layout title="Home">
      <div class="max-w-3xl mx-auto space-y-6">
        <!-- @if(session('success'))
          <div class="rounded-lg bg-green-50 border border-green-200 text-green-800 px-4 py-3">
            {{ session('success') }}
          </div>
        @endif -->

        <div id="react-root" class="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
          <!-- React renders inside this div -->
        </div>

        <div class="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
          <p class="text-sm text-gray-600">Drop your idea for services...</p>

          <form method="POST" action="/ideas" class="mt-5 space-y-5">
            @csrf

            <div>
              <label for="idea" class="block text-sm font-medium text-gray-700">Idea</label>
              <textarea
                id="idea"
                name="idea"
                rows="3"
                class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder="Describe what you want to build…"
              ></textarea>
            </div>

            <div class="flex justify-end">
              <button
                type="submit"
                class="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Save
              </button>
            </div>
          </form>
        </div>

        <div class="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
          <h2 class="text-lg font-semibold text-gray-800">Your Ideas</h2>
          <p class="mt-2 text-sm text-gray-600">No ideas yet — start by submitting one above.</p>
        </div>
      </div>
    </x-layout>
  </div>
</section>
