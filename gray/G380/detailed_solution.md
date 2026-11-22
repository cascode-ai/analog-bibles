# Detailed solution - G380

The outputs of this two-stage op amp are the drains of the second-stage common-source devices, not of the input pair. Each output can swing until its NMOS driver or its PMOS current-source load leaves saturation; the first stage sits behind the second-stage gates and does not limit the outputs. Find both limits, confirm the first stage is comfortably saturated, and centre the common-mode output.

### Step 1 — Which devices set the output swing

$V_{o1}$ is the common drain of $M_6$ (NMOS common source, source at $-V_{SS}$) and $M_7$ (PMOS current source, source at $V_{DD}$); $V_{o2}$ is the common drain of $M_9$ and $M_{10}$. The first-stage nodes connect to the outputs only through the gates of $M_6$ and $M_9$ and the compensation capacitors, so at dc they do not constrain the output voltages.

### Step 2 — Upper and lower limits

$M_7$ stays saturated while $V_{SD7}\ge|V_{ov}|$:

$$
V_{o1(\max)}=V_{DD}-|V_{ov7}|=2.5-0.2=2.3\ \mathrm V .
$$

$M_6$ stays saturated while $V_{DS6}\ge V_{ov}$:

$$
V_{o1(\min)}=-V_{SS}+V_{ov6}=-2.5+0.2=-2.3\ \mathrm V .
$$

By symmetry $V_{o2}$ swings over the same range, set by $M_9$ and $M_{10}$.

### Step 3 — First stage is not limiting

With $V_{ic}=0$, the PMOS input pair has its common source at $0+|V_{tp}|+|V_{ov}|=0.8$ V, so $V_{SD5}=2.5-0.8=1.7$ V. The first-stage outputs sit at the gate voltage of the second-stage drivers, $-V_{SS}+V_{tn}+V_{ov}=-1.7$ V, so $V_{SD1}=0.8-(-1.7)=2.5$ V and $V_{DS3}=0.8$ V. All exceed 0.2 V, so the first stage stays saturated while the outputs swing.

### Step 4 — Best common-mode output and peak differential output

The limits are symmetric about zero, so the largest symmetric differential swing is obtained with

$$
V_{OC}=\frac{2.3\ \mathrm V+(-2.3\ \mathrm V)}{2}=0
$$

Each output can then move $\pm2.3$ V, and the peak differential output is

$$
V_{od(\mathrm{peak})}=V_{o1(\max)}-V_{o2(\min)}=V_{DD}+V_{SS}-V_{ov6}-|V_{ov7}|=2.3-(-2.3)=4.6\ \mathrm V,
$$

i.e. $V_{od}$ ranges from $-4.6$ V to $+4.6$ V (9.2 V peak to peak). Compared with a single-stage amplifier whose outputs are tied to the input-pair drains, the second stage frees the outputs from the input common-mode level and lets them reach within one overdrive of each rail.
