"use client";

export function TestDeeplink() {
  return (
    <div>
      <a href="xyz.be.customer://ride/home">test deeplink1</a>
      <button
        onClick={() => {
          window.location.href = "xyz.be.customer://ride/home";
        }}
      >
        test deeplink2
      </button>
    </div>
  );
}
