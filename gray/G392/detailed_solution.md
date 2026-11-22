# Detailed solution - G392

The inverting buffers draw no input current, so the only currents taken from an op-amp output are those of the capacitors connected directly to it. Write the current drawn from $V_{o1}$, noting that the far end of its 5-pF capacitor is driven to $-v_{o2}$, then evaluate it for DM and CM excitation.

### Step 1 — Load current at $V_{o1}$

$V_{o1}$ connects to its 3-pF capacitor to ground and to one end of the 5-pF capacitor whose other end is held at $-v_{o2}$ by a buffer. The input of the buffer that produces $-v_{o1}$ draws no current. Hence

$$
i_{l1}=s\left[(3\ \mathrm{pF})\,v_{o1}+(5\ \mathrm{pF})\big(v_{o1}-(-v_{o2})\big)\right]=s\left[(8\ \mathrm{pF})\,v_{o1}+(5\ \mathrm{pF})\,v_{o2}\right].
$$

### Step 2 — Differential-mode load

With $v_{o2}=-v_{o1}$, the voltage across each 5-pF capacitor is $v_{o1}+v_{o2}=0$, so they carry no current:

$$
i_{l1}=s(3\ \mathrm{pF})\,v_{o1}\quad\Longrightarrow\quad C_{Ld}=3\ \mathrm{pF}.
$$

### Step 3 — Common-mode load

With $v_{o2}=v_{o1}$, each 5-pF capacitor sees $2v_{o1}$:

$$
i_{l1}=s\left[3\ \mathrm{pF}+2(5\ \mathrm{pF})\right]v_{o1}\quad\Longrightarrow\quad C_{Lc}=13\ \mathrm{pF}.
$$

The cross-coupled, buffered capacitors thus add load capacitance only to the common-mode path. This can be used to compensate the CMFB loop without slowing the differential signal path.
