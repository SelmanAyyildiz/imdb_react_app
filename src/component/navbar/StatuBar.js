import React from 'react'

function StatuBar() {
    return (
        <div className="statu-bar">
            <p>statuBAr</p>
        </div>
    )
}

export default StatuBar
<script type="text/javascript">
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
});
</script>