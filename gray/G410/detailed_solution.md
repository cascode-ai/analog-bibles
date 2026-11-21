# Detailed solution - G410

Each output sits between a PMOS cascode current source ($M_3$, $M_{3A}$) above and an NMOS cascode current sink ($M_{11}$, $M_{1A}$) below. The output can move until one of these transistors leaves saturation. With the cascode gate biases $V_{BB3}$, $V_{BB4}$ chosen optimally, each stacked pair needs only the sum of two overdrives.

### Step 1 — Saturation requirement of a stacked pair

A MOSFET stays in saturation while $|V_{DS}|\ge|V_{ov}|$. For a cascode pair, the bottom (current-source) device needs $|V_{ov}|$ across it and the cascode device needs another $|V_{ov}|$. Choosing the cascode gate voltage so that the current source sits exactly at the edge of saturation, $|V_{DS}|=|V_{ov}|$, minimizes the total voltage the pair needs:

$$
|V_{\mathrm{pair,min}}|=|V_{ov}|+|V_{ov}|=2(0.15\ \mathrm V)=0.3\ \mathrm V.
$$

### Step 2 — Upper and lower limits of one output

Upper limit, set by $M_3$ and $M_{3A}$ (with $V_{BB4}$ optimal):

$$
V_{o1(\max)}=V_{DD}-|V_{ov3}|-|V_{ov3A}|=2\ \mathrm V-0.3\ \mathrm V=1.7\ \mathrm V.
$$

Lower limit, set by $M_{11}$ and $M_{1A}$ (with $V_{BB3}$ optimal):

$$
V_{o1(\min)}=-V_{SS}+V_{ov11}+V_{ov1A}=-2\ \mathrm V+0.3\ \mathrm V=-1.7\ \mathrm V.
$$

The input pair does not limit the output swing, since it drives the folding nodes, not the outputs. The same limits apply to $V_{o2}$.

### Step 3 — Peak differential output

The limits are symmetric about 0 V, so the output CM level is placed at $V_{OC}=0$. At the positive peak $V_{o1}$ is at its maximum while $V_{o2}$ is at its minimum:

$$
V_{od(\mathrm{peak})}=V_{o1(\max)}-V_{o2(\min)}=1.7\ \mathrm V-(-1.7\ \mathrm V)=3.4\ \mathrm V.
$$

The differential output therefore swings between −3.4 V and +3.4 V (6.8 V peak to peak).
