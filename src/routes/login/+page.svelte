<script lang="ts">
   let input_state = $state<{
      email_touched: boolean,
      password_touched: boolean
   }>({
      email_touched: false,
      password_touched: false
   });

   const submit_form = async (event: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement; }) => {
      event.preventDefault();
   }
</script>

<div class="w-screen h-screen flex relative sf-font dark:text-neutral-200">
   <img class="absolute inset-0 w-screen h-screen object-cover xl:block xl:w-9/12 bg-transparent dark:bg-zinc-900" draggable="false" src="" alt="Background" />
   <form onsubmit={submit_form} class="
      relative z-10 flex flex-col gap-1 items-center justify-center m-auto shadow-md shadow-black
      rounded-md h-96 w-80 xl:ml-auto xl:mr-0 xl:h-screen xl:w-3/12 xl:rounded-none
      border-[1.5px] xl:border-l-[1.5px] xl:border-r-0 xl:border-b-0 xl:border-t-0 xl:dark:border-l-neutral-200 border-black dark:bg-zinc-900
   ">
      <h1 class="text-5xl xl:text-6xl mb-4 xl:mb-0">
         Login
      </h1>
      <div class="flex flex-col gap-2 px-4 mt-3 xl:mt-8">
         <div class="flex flex-col gap-0.5 justify-center w-fit">
            <label for="email-inp" class="text-xl">Email</label>
            <input id="email-inp" onfocusout={() => input_state.email_touched = true} type="email" class={
               `form-input ${input_state.email_touched ? "validate-input" : ""}`
            } required />
         </div>
         <div class="flex flex-col gap-0.5 justify-center w-fit">
            <label for="psw-inp" class="text-xl">Password</label>
            <input id="psw-inp" onfocusout={() => input_state.password_touched = true} type="password" class={
               `form-input ${input_state.password_touched ? "validate-input" : ""}`
            } required minlength="8" />
         </div>
      </div>
      <span class="text-md 2xl:text-lg mt-1">
         Don't have an account? <a class="hover:underline text-blue-500" href="/register">Sign up</a>
      </span>
      <button type="submit" class="
         relative rounded-md cursor-pointer text-gray-100 mt-4 xl:mt-20
         w-56 h-11 xl:h-12 xl:w-64 2xl:w-72
         border-0 bg-sky-500 text-2xl hover:bg-sky-600 transition-colors
         dark:bg-blue-600 dark:hover:bg-blue-900
      ">
         Login
      </button>
   </form>
</div>
