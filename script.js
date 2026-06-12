//checking if js is loaded

console.log("js loaded")

const form = document.getElementById("cycleForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // radio buttons
    const painSeverity =
        document.querySelector('input[name="pain_severity"]:checked')?.value || "";

    const relief =
        document.querySelector('input[name="relief"]:checked')?.value || "";

    const flow =
        document.querySelector('input[name="flow"]:checked')?.value || "";

    // checkboxes
    const painTypes = [];
    document.querySelectorAll('input[name="pain_type"]:checked')
        .forEach(box => painTypes.push(box.value));

    const painRegions = [];
    document.querySelectorAll('input[name="pain_region"]:checked')
        .forEach(box => painRegions.push(box.value));

    // number inputs, get as values
    const missedSchool =
        document.getElementById("missed_school").value;

    const nurseVisits =
        document.getElementById("nurse_visits").value;

    // individual checkboxes
    const sentHome =
        document.getElementById("sent_home").checked;

    const sports =
        document.getElementById("sports").checked;

    const sleep =
        document.getElementById("sleep").checked;

    const focus =
        document.getElementById("focus").checked;

    // treatment checkboxes
    const heatPack =
        document.getElementById("heat_pack").checked;

    const rest =
        document.getElementById("rest").checked;

    const stretching =
        document.getElementById("stretching").checked;

    const medication =
        document.getElementById("medication").checked;

    const patch =
        document.getElementById("patch").checked;

    // period details
    const spotting =
        document.getElementById("spotting").checked;

    const clots =
        document.getElementById("clots").checked;

    const longPeriod =
        document.getElementById("long_period").checked;

    // emotions
    const anxious =
        document.getElementById("anxious").checked;

    const frustrated =
        document.getElementById("frustrated").checked;

    const embarrassed =
        document.getElementById("embarrassed").checked;

    const overwhelmed =
        document.getElementById("overwhelmed").checked;

    const dismissed =
        document.getElementById("dismissed").checked;

    // extra notes 
    const notes =
        document.getElementById("notes").value;

    const report = {
        painSeverity,
        painTypes,
        painRegions,

        schoolLife: {
            missedSchool,
            nurseVisits,
            sentHome,
            sports,
            sleep,
            focus
        },

        treatment: {
            heatPack,
            rest,
            stretching,
            medication,
            patch,
            relief
        },

        periodDetails: {
            flow,
            spotting,
            clots,
            longPeriod
        },

        emotionalImpact: {
            anxious,
            frustrated,
            embarrassed,
            overwhelmed,
            dismissed
        },

        notes
    };

        const summary = `
CYCLE CHECK REPORT

PAIN & PHYSICAL SYMPTOMS
------------------------
Pain Severity: ${report.painSeverity || "Not specified"}
Pain Types: ${report.painTypes.length ? report.painTypes.join(", ") : "None selected"}
Pain Regions: ${report.painRegions.length ? report.painRegions.join(", ") : "None selected"}

SCHOOL & DAILY LIFE
-------------------
Days Missed: ${report.schoolLife.missedSchool || 0}
Nurse Visits: ${report.schoolLife.nurseVisits || 0}
Sent Home: ${report.schoolLife.sentHome ? "Yes" : "No"}
Sports Impacted: ${report.schoolLife.sports ? "Yes" : "No"}
Sleep Disrupted: ${report.schoolLife.sleep ? "Yes" : "No"}
Difficulty Concentrating: ${report.schoolLife.focus ? "Yes" : "No"}

TREATMENT & PAIN RELIEF
-----------------------
Heat Pack: ${report.treatment.heatPack ? "Yes" : "No"}
Rest: ${report.treatment.rest ? "Yes" : "No"}
Stretching: ${report.treatment.stretching ? "Yes" : "No"}
Medication: ${report.treatment.medication ? "Yes" : "No"}
Patch / Roll-On: ${report.treatment.patch ? "Yes" : "No"}

Relief Level: ${report.treatment.relief || "Not specified"}

PERIOD DETAILS
--------------
Flow: ${report.periodDetails.flow || "Not specified"}
Spotting: ${report.periodDetails.spotting ? "Yes" : "No"}
Blood Clots: ${report.periodDetails.clots ? "Yes" : "No"}
Longer Than Usual: ${report.periodDetails.longPeriod ? "Yes" : "No"}

EMOTIONAL IMPACT
----------------
Anxious: ${report.emotionalImpact.anxious ? "Yes" : "No"}
Frustrated: ${report.emotionalImpact.frustrated ? "Yes" : "No"}
Embarrassed: ${report.emotionalImpact.embarrassed ? "Yes" : "No"}
Overwhelmed: ${report.emotionalImpact.overwhelmed ? "Yes" : "No"}
Felt Dismissed: ${report.emotionalImpact.dismissed ? "Yes" : "No"}

ADDITIONAL NOTES
----------------
${report.notes || "No additional notes provided."}
`;

    console.log(summary);

    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF();

    pdf.setFontSize(16);
    pdf.text("Cycle Check Report", 10, 15);

    pdf.setFontSize(11);

    const wrappedText = pdf.splitTextToSize(summary, 180);

    pdf.text(wrappedText, 10, 25);

    pdf.save("cycle-check-report.pdf");
});
