# Detailed solution - R695

**Approach.** List the lithography (masking) steps of a standard polysilicon-gate CMOS process, then ask for each one whether a *small* misalignment could stop all current in an NMOS cascode. Zero current needs either a break in the current path or a transistor whose gate–source voltage is held below threshold. Self-alignment makes the front-end (transistor-forming) steps tolerant of small shifts, so the culprit must be a back-end step: contact windows or metal/via patterning.

### Step 1 — The circuit and what "zero output current" requires

An NMOS cascode current source consists of:

- $M_1$, the bottom device: source at ground, gate at a bias voltage $V_{b1}$, drain at node X;
- $M_2$, the cascode device: source at X, gate at a bias voltage $V_{b2}$, drain at the output.

The output current flows from the output, through $M_2$, through $M_1$, to ground. It is zero only if:

1. **an open circuit** breaks this path (a missing connection at the output drain, at the source of $M_1$, or between X and the transistors), or
2. **one transistor is turned off**, i.e. its gate–source voltage is at or below threshold. This happens if its gate is shorted to its own source ($V_{GS} = 0$), its bias connection is open (the gate floats, typically discharging toward ground), or its bias line is shorted to ground.

A misalignment that merely changes device dimensions slightly, or a short that *adds* a current path, cannot produce zero current.

### Step 2 — The masking steps of a poly-gate CMOS process

In order, the typical lithography steps are:

1. **n-well** definition (for the PMOS devices);
2. **active area** definition (where thin oxide and transistors will be; the rest becomes field oxide). The channel-stop implant is done with this same mask, so it is automatically aligned to the active regions;
3. **threshold-adjust implant**, often a blanket implant or with a coarse mask;
4. gate oxide growth, polysilicon deposition and **poly gate** patterning;
5. **n+ and p+ source/drain implants** (with "select" masks that open over large areas); the gate itself blocks the implant from the channel;
6. dielectric deposition and **contact windows** (holes down to the diffusions and the poly);
7. **metal 1** patterning, then **vias** and **metal 2**, and so on.

### Step 3 — Front-end steps: protected by self-alignment and design-rule margins

**Poly gate vs. active area.** In a self-aligned process the source/drain implant is done *after* the gate is patterned, and the poly itself masks the channel. Wherever the gate lands on the active area, the n+ regions form right up to its two edges. So:

- a shift **along the channel length** just makes one source/drain region slightly wider and the other slightly narrower; the channel is still bounded by n+ on both sides and the transistor works normally;
- a shift **along the channel width** is absorbed by the required poly extension ("end cap") beyond the active area. Only a large shift would leave a strip of active area uncovered by poly; that strip would be implanted n+ and **short** source to drain, giving *excess* current, not zero.

There is therefore no way for a small gate misalignment to leave a gap between channel and source/drain.

**Source/drain select masks.** The n+ select opening encloses the active area with a generous margin, so a small shift still dopes every source/drain region.

**Channel-stop and threshold-adjust implants.** The channel stop uses the active mask itself (self-aligned to the transistors), and the threshold-adjust implant is a blanket or loosely aligned implant. A small misalignment changes nothing.

**n-well mask.** The NMOS devices sit in the substrate, separated from the well by a large spacing rule; a small shift of the well edge does not reach them.

**Conclusion of Step 3:** no front-end step can turn the current off through a small misalignment.

### Step 4 — Contact windows: a likely culprit

Contacts are placed at (or near) the **minimum spacing** from the poly gates, and with minimum enclosure by the diffusion or poly they land on. A small misalignment of the contact mask can therefore:

- **Land a source contact partly on the adjacent gate poly.** After metal fills the window, the gate is shorted to the source.
  - For $M_1$: the gate is shorted to its grounded source, $V_{GS1} = 0 < V_{THN}$, so $M_1$ is off.
  - For $M_2$ (if node X is a contacted region): the gate is shorted to X, $V_{GS2} = 0$, so $M_2$ is off.
  
  Either way, the output current is zero.
- **Miss the diffusion or the poly pad.** A contact shifted off the source of $M_1$ or the drain of $M_2$ leaves that terminal unconnected: the current path is open. A contact shifted off the poly pad of a gate leaves that gate unbiased (floating), and a floating gate generally does not hold the bias voltage needed to conduct.

(A gate shorted to its *drain* instead would make the device diode-connected; current would still flow, so that case does not explain the symptom.)

The same failures can be described as a misalignment of the poly gate *relative to the contact windows*: what matters is the relative position of the two layers, and this pair is **not** self-aligned.

### Step 5 — Metal and via patterning: also possible

Metal lines are drawn at minimum width and spacing over the contacts. A small shift of the metal (or via) mask can:

- **miss a contact or via**, leaving the source, drain or gate connection open, which breaks the current path or leaves a gate unbiased;
- **bridge to a neighbouring line**, for example shorting the gate-bias line $V_{b1}$ or $V_{b2}$ to a ground line, which turns the corresponding transistor off.

Each of these gives zero output current.

### Step 6 — Summary of the steps

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

**Common mistake.** Claiming that a misaligned poly gate leaves a gap between the channel and the source or drain. In a self-aligned process the source/drain implant is done after the gate, using the gate itself as the mask, so the n+ regions always reach the gate edges no matter where the gate lands.

**Common mistake.** Proposing a defect that *adds* conduction, such as a gate shifted along its width so that the source and drain are shorted. That would increase the current, not make it zero.

**Common mistake.** Blaming the threshold-adjust or channel-stop implants. These are blanket or self-aligned implants whose placement does not depend on fine alignment, so a small misalignment does not affect them.
