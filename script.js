document.getElementById("admitForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("fullName").value.trim();
  const erp = document.getElementById("erpId").value.trim();
  const branch = document.getElementById("branch").value;

  if (!name || !erp || !branch) {
    alert("Please fill all fields correctly.");
    return;
  }

  const query = `name=${encodeURIComponent(name)}&erp=${encodeURIComponent(
    erp
  )}&branch=${encodeURIComponent(branch)}`;
  window.location.href = `admit-card.html?${query}`;
});
