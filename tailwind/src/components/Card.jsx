import React from "react";
function Card({username="RSS",post="NO Post Here"}){
    // console.log(props);
    return(
        <figure class="bg-slate-100 rounded-xl dark:bg-slate-800">
        <img class="w-24 h-24" src="/sarah-dayan.jpg" alt="" width="384" height="512" />
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, dolorum.
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {username}
      </div>
      <div className="text-slate-500 dark:text-slate-400">
        {post}
      </div>
    </figcaption>
  </div>
</figure>
    )
}
export default Card