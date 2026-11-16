# Detailed solution - R695

**Approach.** Zero current needs either a break in the current path or a transistor whose gate–source voltage is held below threshold. Go through the masking steps of a poly-gate CMOS process and ask whether a *small* misalignment could cause either. Self-alignment makes the front-end (transistor-forming) steps tolerant of small shifts, so the culprit must be a back-end step: contact windows or metal/via patterning.

### Step 1 — What "zero output current" requires

Call the bottom device $M_1$ (source at ground, gate at $V_{b1}$, drain at node X) and the cascode device $M_2$ (source at X, gate at $V_{b2}$, drain at the output). The output current flows through $M_2$ and $M_1$ to ground, and is zero only if:

1. **an open circuit** breaks this path (a missing connection at the output drain, at the source of $M_1$, or between X and the transistors), or
2. **one transistor is turned off**: its gate is shorted to its own source ($V_{GS} = 0$), its bias connection is open (the gate floats, typically discharging toward ground), or its bias line is shorted to ground.

A misalignment that merely changes device dimensions slightly, or a short that *adds* a current path, cannot produce zero current.

### Step 2 — Front-end steps: protected by self-alignment and margins

The masking steps are, in order: n-well; active area (the channel-stop implant uses this same mask); threshold-adjust implant (blanket or coarse mask); poly gate; n+/p+ source/drain select; contact windows; metal 1, vias, metal 2, and so on.

**Poly gate vs. active area.** The source/drain implant is done *after* the gate is patterned, with the poly masking the channel, so the n+ regions always form right up to both gate edges.

- A shift **along the channel length** makes one source/drain region slightly wider and the other slightly narrower; the transistor works normally.
- A shift **along the channel width** is absorbed by the poly extension ("end cap") beyond the active area. Only a large shift would leave an uncovered strip of active area, which would be implanted n+ and **short** source to drain: *excess* current, not zero.

**Source/drain select masks.** The n+ select opening encloses the active area with a generous margin, so a small shift still dopes every source/drain region.

**Channel-stop and threshold-adjust implants.** The channel stop is self-aligned to the transistors through the active mask, and the threshold-adjust implant is blanket or loosely aligned, so a small misalignment changes nothing.

**n-well mask.** The NMOS devices are separated from the well by a large spacing rule, so a small shift of the well edge does not reach them.

So no front-end step can turn the current off through a small misalignment.

### Step 3 — Contact windows: a likely culprit

Contacts sit at (or near) the **minimum spacing** from the poly gates, with minimum enclosure by the diffusion or poly they land on. A small misalignment of the contact mask can therefore:

- **Land a source contact partly on the adjacent gate poly**, so that after metal fill the gate is shorted to the source. For $M_1$, $V_{GS1} = 0 < V_{THN}$; for $M_2$ (if node X is a contacted region), $V_{GS2} = 0$. Either way the device is off and the output current is zero.
- **Miss the diffusion or the poly pad.** A contact shifted off the source of $M_1$ or the drain of $M_2$ opens the current path; one shifted off a gate's poly pad leaves that gate floating, and a floating gate generally does not hold the bias voltage needed to conduct.

(A gate shorted to its *drain* would make the device diode-connected; current would still flow, so that case does not explain the symptom.)

The same failures can be described as a misalignment of the poly gate *relative to the contact windows*: what matters is the relative position of the two layers, and this pair is **not** self-aligned.

### Step 4 — Metal and via patterning: also possible

Metal lines are drawn at minimum width and spacing over the contacts. A small shift of the metal (or via) mask can:

- **miss a contact or via**, leaving a source, drain or gate connection open;
- **bridge to a neighbouring line**, for example shorting the gate-bias line $V_{b1}$ or $V_{b2}$ to a ground line, which turns that transistor off.

Each of these gives zero output current.

### Step 5 — Summary of the steps

| Lithography step | Small misalignment can give zero current? | Reason |
|---|---|---|
| n-well | no | NMOS far from the well edge |
| active area / channel stop | no | channel stop self-aligned; poly end caps cover shifts |
| threshold-adjust | no | blanket or loosely aligned implant |
| poly gate (vs. S/D) | no | S/D implant self-aligned to the gate; a big width shift would *short* S/D |
| n+/p+ select | no | large enclosure of the active area |
| **contact windows** | **yes** | gate shorted to source ($V_{GS} = 0$), or missing source/drain/gate connection |
| **metal / via** | **yes** | open connection or short of a bias line to ground |

### Result

The misalignment must have occurred in a **non-self-aligned back-end step**: most likely the **contact-window lithography** (equivalently, the poly-to-contact alignment), or the **metal/via lithography**. A shifted contact can short a gate to its source (turning $M_1$ or $M_2$ off) or miss a source, drain or gate connection; a shifted metal line can miss a contact or short a bias line to ground. It cannot have been the poly gate relative to the source/drain regions, the source/drain implant, or the blanket threshold-adjust / channel-stop implants, because the source/drain regions are self-aligned to the gate and these steps have ample margins.

**Common mistake.** Claiming that a misaligned poly gate leaves a gap between the channel and the source or drain. The source/drain implant uses the gate itself as the mask, so the n+ regions always reach the gate edges.

**Common mistake.** Proposing a defect that *adds* conduction, such as a gate shifted along its width so that source and drain are shorted; that increases the current.

**Common mistake.** Blaming the threshold-adjust or channel-stop implants, which are blanket or self-aligned and do not depend on fine alignment.
