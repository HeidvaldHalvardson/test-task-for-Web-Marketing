const ALERT_SHOW_TIME=5e3,showAlert=e=>{const t=document.createElement("div");t.style.zIndex=100,t.style.position="absolute",t.style.left=0,t.style.top=0,t.style.right=0,t.style.padding="10px 3px",t.style.fontSize="30px",t.style.textAlign="center",t.style.backgroundColor="red",t.textContent=e,document.body.append(t),setTimeout((()=>{t.remove()}),5e3)},clearProducts=()=>{document.querySelector(".products__list").innerHTML=""};export{showAlert,clearProducts};