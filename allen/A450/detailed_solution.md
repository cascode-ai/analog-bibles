# Detailed solution - A450

The weight of each bit is set by the ratio of its capacitor to $C_X$. Match the required weights $2^{-(i+1)}$ to the capacitor ratios to find which bit drives which switch, then identify which contact of each switch corresponds to a 1.

### Step 1 — Weight contributed by each capacitor

Charge conservation on the virtual-ground summing node gives, for a capacitor $C_k$ switched from ground to $V_{REF}$,

$$
\Delta v_{OUT}=-\frac{C_k}{C_X}V_{REF}=-\frac{C_k}{2^NC}V_{REF}.
$$

So the capacitor $2^{m}C$ ($m=0,\dots,N-1$) contributes a weight $2^{m}/2^N=2^{-(N-m)}$.

### Step 2 — Assign bits to capacitors

Bit $b_i$ must carry the weight $2^{-(i+1)}$. Setting $2^{-(N-m)}=2^{-(i+1)}$ gives $m=N-1-i$: bit $b_i$ controls the capacitor $2^{N-1-i}C$.

| Switch (top to bottom in the figure) | Capacitor | Bit | Weight |
|---|---|---|---|
| top | $C$ | $b_{N-1}$ (LSB) | $2^{-N}$ |
| second | $2C$ | $b_{N-2}$ | $2^{-(N-1)}$ |
| … | … | … | … |
| bottom | $2^{N-1}C$ | $b_0$ (MSB) | $1/2$ |

The MSB therefore switches the largest array capacitor, half of $C_X$.

### Step 3 — Contact positions

Each switch is a changeover switch. Its upper contact is tied to the line from the + terminal of $V_{REF}$, so it is the bit $=1$ position; its lower contact is tied to the ground line, so it is the bit $=0$ position. During reset (switch across $C_X$ closed) all bit switches rest on the ground contact so that every capacitor is discharged before the conversion.
