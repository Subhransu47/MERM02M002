
const steps = ["step1", "step2", "step3", "step4"];
let current = 0;
function highlightStep() {
  if (current < steps.length) {
    document.getElementById(steps[current]).style.color = "green";
    current++;
    setTimeout(highlightStep, 2000);
  }
}
highlightStep();
