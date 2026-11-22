# Detailed solution - G417

Each output node connects only to the drain of a PMOS mirror output transistor above it and the drain of an NMOS current sink below it. The output can swing until either of these leaves saturation, which happens when its $|V_{DS}|$ falls to $|V_{ov}|$. The input stage does not set these limits.

### Step 1 — Upper limit

$M_6$ (for $V_{o1}$) and $M_8$ (for $V_{o2}$) have their sources at $V_{DD}$ and stay saturated while $V_{SD}\ge|V_{ov}|$:

$$
V_{o(\max)}=V_{DD}-|V_{ov6}|=1.65\ \mathrm V-0.2\ \mathrm V=1.45\ \mathrm V.
$$

### Step 2 — Lower limit

$M_7$ (for $V_{o1}$) and $M_9$ (for $V_{o2}$) have their sources at $-V_{SS}$ and stay saturated while $V_{DS}\ge V_{ov}$:

$$
V_{o(\min)}=-V_{SS}+V_{ov7}=-1.65\ \mathrm V+0.2\ \mathrm V=-1.45\ \mathrm V.
$$

### Step 3 — The input stage does not limit the swing

The input pair $M_1$, $M_2$ drives the diode-connected $M_3$, $M_4$, whose voltages are fixed at $V_{DD}-|V_{GS3}|=1.65-0.8=0.85$ V regardless of the outputs. The outputs connect to no gate or source of the input stage, so they are isolated from it, and only the two output transistors set the limits. Each output therefore swings from −1.45 V to +1.45 V.

### Step 4 — CM level for maximum symmetric swing

For the largest symmetric swing, the dc CM output level should sit midway between the limits:

$$
V_{OC}=\frac{V_{o(\max)}+V_{o(\min)}}2=\frac{1.45\ \mathrm V+(-1.45\ \mathrm V)}2=0\ \mathrm V.
$$

Each output then swings ±1.45 V about 0, giving a peak differential output of $V_{od(\mathrm{peak})}=1.45-(-1.45)=2.9$ V.
