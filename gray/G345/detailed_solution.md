# Detailed solution - G345

Find the small-signal parameters, refer the transistor and load noise to the input as a voltage generator (input shorted) and a current generator (input open), then combine them with $R_S$. As a cross-check, compute the output noise directly from every source and divide by the squared transimpedance.

### Step 1 — Small-signal parameters and noise sources

At $I_C=1$ mA,

$$
g_m=\frac{I_C}{V_T}=\frac{1\ \mathrm{mA}}{26\ \mathrm{mV}}=38.5\ \mathrm{mS},\qquad
r_\pi=\frac{\beta}{g_m}=1.3\ \mathrm{k\Omega},\qquad
I_B=\frac{I_C}{\beta}=20\ \mu\mathrm A .
$$

With $r_b=0$, $r_o=\infty$ and flicker noise neglected, the noise sources are the base shot noise $\overline{i_b^2}=2qI_B\Delta f$ (between base and emitter), the collector shot noise $\overline{i_c^2}=2qI_C\Delta f$ (collector to emitter), the load thermal noise $\overline{i_L^2}=(4kT/R_L)\Delta f$ in parallel with $R_L$, and, when the source is included, $\overline{i_s^2}=(4kT/R_S)\Delta f$ in parallel with $R_S$.

### Step 2 — Equivalent input noise voltage

Short the input. Then $v_\pi$ is set only by the input generator, and the collector current noise $i_c+i_L$ (both at the output node) must equal $g_mv_i$. Referring them through $g_m$, and noting $i_b$ is shorted out,

$$
\frac{\overline{v_i^2}}{\Delta f}=\frac{2qI_C}{g_m^2}+\frac{4kT}{g_m^2R_L}
=4kT\left(r_b+\frac{1}{2g_m}+\frac{1}{g_m^2R_L}\right),
$$

using $2qI_C/g_m^2=2kT/g_m=4kT/(2g_m)$. Numerically,

$$
\frac{1}{2g_m}=13.0\ \Omega,\qquad \frac{1}{g_m^2R_L}=0.068\ \Omega,\qquad
\frac{\overline{v_i^2}}{\Delta f}=(1.66\times10^{-20}\ \mathrm{V\cdot C})(13.07\ \Omega)=2.17\times10^{-19}\ \mathrm{V^2/Hz}.
$$

### Step 3 — Equivalent input noise current

Open the input. The base shot noise now flows entirely into $r_\pi$, so it appears directly as an input current. The output sources must be produced by an input current $i_i$ through the current gain $\beta$, so they are divided by $\beta^2$:

$$
\frac{\overline{i_i^2}}{\Delta f}=2qI_B+\frac{2qI_C}{\beta^2}+\frac{4kT}{\beta^2R_L}.
$$

| Term | Value (A²/Hz) |
|---|---|
| $2qI_B=2(1.6\times10^{-19}\ \mathrm C)(20\ \mu\mathrm A)$ | $6.40\times10^{-24}$ |
| $2qI_C/\beta^2$ | $1.28\times10^{-25}$ |
| $4kT/(\beta^2R_L)$ | $6.6\times10^{-28}$ |
| Total $\overline{i_i^2}/\Delta f$ | $6.53\times10^{-24}$ |

The base shot noise dominates.

### Step 4 — Total input noise current with $R_S=1$ kΩ

For a current-driven input, convert everything to a current in parallel with the source: $R_S$ contributes $4kT/R_S$, the current generator adds directly, and the voltage generator drives a current $v_i/R_S$ into $R_S$. Neglecting correlation,

$$
\frac{\overline{i_{eq}^2}}{\Delta f}=\frac{4kT}{R_S}+\frac{\overline{i_i^2}}{\Delta f}+\frac{\overline{v_i^2}}{R_S^2\Delta f}
=1.66\times10^{-23}+6.53\times10^{-24}+2.17\times10^{-25}=2.335\times10^{-23}\ \mathrm{A^2/Hz}.
$$

The noise is white, so in a 2-MHz brick-wall bandwidth

$$
\overline{i_{eq}^2}=(2.335\times10^{-23}\ \mathrm{A^2/Hz})(2\times10^{6}\ \mathrm{Hz})=4.67\times10^{-17}\ \mathrm{A^2},\qquad
i_{eq,\mathrm{rms}}=6.83\ \mathrm{nA}.
$$

### Step 5 — Direct calculation from all sources

With the source in place, $i_s$ and $i_b$ both flow into $R_S\parallel r_\pi=565\ \Omega$ and are amplified by $g_mR_L$, while $i_c$ and $i_L$ flow directly into $R_L$:

$$
\frac{\overline{v_o^2}}{\Delta f}=(g_mR_L)^2(R_S\parallel r_\pi)^2\left(\frac{4kT}{R_S}+2qI_B\right)+R_L^2\left(2qI_C+\frac{4kT}{R_L}\right).
$$

| Contribution | Value (V²/Hz) |
|---|---|
| $R_S$ and base shot noise | $1.087\times10^{-12}$ |
| Collector shot noise | $3.2\times10^{-14}$ |
| $R_L$ thermal noise | $1.7\times10^{-16}$ |
| Total | $1.119\times10^{-12}$ |

The transimpedance from $i_s$ to $v_o$ is $g_mR_L(R_S\parallel r_\pi)=(38.5\ \mathrm{mS})(10\ \mathrm{k\Omega})(565\ \Omega)=217\ \mathrm{k\Omega}$, so the input-referred density is

$$
\frac{1.119\times10^{-12}\ \mathrm{V^2/Hz}}{(217\ \mathrm{k\Omega})^2}=2.368\times10^{-23}\ \mathrm{A^2/Hz},
\qquad
i_{eq,\mathrm{rms}}=\sqrt{(2.368\times10^{-23})(2\times10^6)}\ \mathrm A=6.88\ \mathrm{nA}.
$$

### Step 6 — Comparison

The two methods give 6.83 nA and 6.88 nA rms, agreeing within about 1%. The small difference is the correlation neglected in Step 4: the collector shot noise appears in both $v_i$ (as $i_c/g_m$) and $i_i$ (as $i_c/\beta$), so the exact total contains the cross term $2\cdot2qI_C/(g_mR_S\beta)=3.3\times10^{-25}$ A²/Hz, about 1.4% of the total, which accounts for the whole difference. The source resistor and the base shot noise dominate, so the generator model is accurate here.
