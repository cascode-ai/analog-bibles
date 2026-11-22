# Detailed solution - A370

In an inverting comparator the signal $v_{in}$ is applied to the inverting input and the reference (here 0 V) to the noninverting input, so the comparator responds to $v_P-v_N=-v_{in}$. Every characteristic of the noninverting comparator therefore carries over with the input axis reversed: the output is high for low inputs and falls as the input rises. Each plot below uses $v_{in}=v_N-v_P$ as its input axis.

### Step 1 — Ideal transfer curve

The ideal comparator switches at $v_P-v_N=0$ with infinite gain, so

$$
v_O=\begin{cases}V_{OH}, & v_{in}<0\\ V_{OL}, & v_{in}>0\end{cases}
$$

with a vertical step at $v_{in}=0$ going from $V_{OH}$ down to $V_{OL}$.

![Ideal inverting comparator: output at VOH for negative input, stepping vertically down to VOL at zero input](/q/A370/solution-ideal.svg)

### Step 2 — Finite gain

With finite gain the output saturates at $V_{OH}$ when $v_P-v_N\ge V_{IH}$, i.e. $v_{in}\le-V_{IH}$, and at $V_{OL}$ when $v_P-v_N\le V_{IL}$, i.e. $v_{in}\ge-V_{IL}$. In between, the output is a straight line of negative slope

$$
\frac{dv_O}{dv_{in}}=-A_v=-\frac{V_{OH}-V_{OL}}{V_{IH}-V_{IL}} .
$$

The transition region has the same width $V_{IH}-V_{IL}$ as for the noninverting comparator and is centred on zero input (for $V_{IL}=-V_{IH}$), but the output falls as the input rises.

![Inverting comparator with finite gain: output falls linearly with slope −Av between −VIH and −VIL](/q/A370/solution-gain.svg)

### Step 3 — Finite gain with input offset

An input offset $V_{OS}$ shifts the transition so that its midpoint is no longer at zero input. The curve is the same falling finite-gain characteristic shifted horizontally by $V_{OS}$; since the sign of the offset is random, the midpoint can lie on either side of zero ($v_{in}=\pm V_{OS}$). The output therefore does not cross $(V_{OH}+V_{OL})/2$ at $v_{in}=0$.

![Inverting comparator with offset: the falling curve shifted horizontally by VOS, compared with the dashed no-offset curve](/q/A370/solution-offset.svg)

### Step 4 — Propagation delay

For the time response, an input transition from $V_{IL}$ to $V_{IH}$ (a rising input) now produces, after a delay, an output transition from $V_{OH}$ down to $V_{OL}$; a falling input gives a rising output. The propagation delay is defined exactly as before, from the input crossing its midpoint to the output crossing its midpoint:

$$
v_{in}=\frac{V_{IH}+V_{IL}}2\ \to\ v_O=\frac{V_{OH}+V_{OL}}2:\qquad t_p .
$$

Only the direction of the output transition is inverted.

![Propagation delay of the inverting comparator: rising input, falling output, tp between the two 50 % points](/q/A370/solution-delay.svg)

| Plot | Noninverting | Inverting |
|---|---|---|
| Ideal | step up from $V_{OL}$ to $V_{OH}$ at zero | step down from $V_{OH}$ to $V_{OL}$ at zero |
| Finite gain | slope $+A_v$ | slope $-A_v$, same transition width |
| Offset | shifted by $V_{OS}$ | falling curve shifted by $V_{OS}$ |
| Delay | input rises, output rises | input rises, output falls; same $t_p$ definition |
