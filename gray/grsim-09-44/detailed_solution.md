# Detailed solution - grsim-09-44

The op-amp model is ideal apart from $a_v(s)$ and $C_{\text{in}}$, so everything can be computed exactly. With $V_i=0$, the inverting node sees the 100-kΩ input resistor in parallel with $C_{\text{in}}$ on one side ($Z_d$, the driven side), and the 100-kΩ feedback resistor $R_F$ to the ideal source $a_vv_x$ on the other (the return side). Since $v_x$ is measured from the inverting node to ground with + at ground, $v_x=-v_n$. Derive the two injection ratios and the direct return ratio, then check that the ngspice simulation and the combination formula reproduce them.

### Step 1 — Direct return ratio

Replace the controlled source by an independent test source $s_t$. It drives $R_F$ into $Z_d$, so $v_n=s_tZ_d/(Z_d+R_F)$. The returned value of the source is $a_v(-v_n)$, so

$$
\mathscr{R}(s)=a_v(s)\frac{Z_d}{Z_d+R_F},\qquad Z_d=100\ \mathrm{k\Omega}\parallel\frac{1}{sC_{\text{in}}} .
$$

Because $Z_d$ and $R_F$ are both 100 kΩ, $Z_d/(Z_d+R_F)=\tfrac12/[1+s(50\ \mathrm{k\Omega})(4\ \mathrm{pF})]$, and

$$
\mathscr{R}(s)=\frac{500}{(1+s/100)(1+s/10^{6})(1+s/5\times10^{6})},
$$

with $s$ in rad/s.

### Step 2 — Injection ratios

- **Current injection.** With the test current entering the inverting node, $i_d=v_n/Z_d$. The current arriving through $R_F$ is $i_m=(-a_vv_n-v_n)/R_F$. Hence
$$
\mathscr{R}'_i=-\frac{i_m}{i_d}=(1+a_v)\frac{Z_d}{R_F}.
$$
- **Voltage injection.** With $v_t$ in series ($v_d=v_n$ on the input side, $v_m$ on the $R_F$ side), the current through $R_F$ equals the current into $Z_d$: $(-a_vv_d-v_m)/R_F=v_d/Z_d$, so
$$
\mathscr{R}'_v=-\frac{v_m}{v_d}=a_v+\frac{R_F}{Z_d}.
$$

Substituting both into the combination formula returns exactly $a_vZ_d/(Z_d+R_F)$, so the method is exact for this single loop.

### Step 3 — SPICE model

$a_v(s)$ is built from a VCVS of gain 1000 controlled by $0-v_n$, followed by two buffered RC sections with time constants of 10 ms (pole at 100 rad/s) and 1 µs (pole at $10^6$ rad/s). The test sources are placed between the inverting node $n$ (driven side) and the left end $m$ of $R_F$ (return side).

```spice
* grsim-09-44 inverting amplifier, injections at the inverting node
Vi in 0 dc 0
R1 in n 100k
Cin n 0 4p
RF m o 100k
E1 a1 0 0 n 1000
Ra a1 p1 1k
Ca p1 0 10u
E2 a2 0 p1 0 1
Rb a2 p2 1k
Cb p2 0 1n
E3 o 0 p2 0 1
Vt n m dc 0 ac 0
It 0 m dc 0 ac 1
.ac dec 200 1 10g
* run 1 (It ac 1):  i_d = -i(Vt),  R'_i = -(i_d - 1)/i_d
* run 2 (Vt ac 1):  R'_v = -v(m)/v(n)
* R = 1/(1/(1+R'_i) + 1/(1+R'_v)) - 1, evaluated as complex vectors
.end
```

### Step 4 — (a) Values at the four frequencies

| $f$ | $\mathscr{R}'_i$ | $\mathscr{R}'_v$ | $\mathscr{R}$ (simulation) | $\mathscr{R}$ (direct) |
|---|---|---|---|---|
| 1 kHz | 15.95∠−86.0° | 15.95∠−85.9° | 7.957∠−89.5° | 7.957∠−89.5° |
| 100 kHz | 0.907∠−21.1° | 0.938∠+8.4° | 0.0669∠−129.3° | 0.0669∠−129.3° |
| 10 MHz | 0.0398∠−87.7° | 25.15∠+87.7° | $1.005\times10^{-6}$∠−264.5° | $1.005\times10^{-6}$∠−264.5° |
| 1 GHz | $3.98\times10^{-4}$∠−90° | 2513∠+90° | $1.008\times10^{-12}$∠−270° | $1.008\times10^{-12}$∠−270° |

The combination agrees with the direct calculation to the precision of the simulation; it must be done in complex arithmetic, in double precision. At 1 GHz, $\mathscr{R}$ is about $10^{-12}$, so $1/(1+\mathscr{R})$ differs from 1 only in the twelfth digit, and exporting $\mathscr{R}'_i$ and $\mathscr{R}'_v$ with seven significant digits before combining them would give an 18 % error.

Neither injection ratio alone is the return ratio. At 1 kHz both are about twice $\mathscr{R}$, because the two sides of the break have equal resistance (100 kΩ each). At high frequency, $C_{\text{in}}$ makes the driven side a low impedance. $\mathscr{R}'_i$ then tracks $\mathscr{R}$ in magnitude, while $\mathscr{R}'_v$ grows as $R_F/Z_d$ and has nothing to do with the loop.

### Step 5 — (b) Magnitude, phase and margins

![Return-ratio magnitude in dB versus log frequency: 54 dB at low frequency, crossing 0 dB at 7.95 kHz, −41.6 dB at the −180° frequency, then falling at −60 dB/decade](/q/grsim-09-44/solution-magnitude.svg)

![Return-ratio phase versus log frequency: −93.3° at the 7.95-kHz unity-gain frequency, −180° at 356 kHz, approaching −270°](/q/grsim-09-44/solution-phase.svg)

From the expression of Step 1, $|\mathscr{R}|$ is 500 (54 dB) up to 100 rad/s, falls at −20 dB/decade to $10^6$ rad/s, at −40 dB/decade to $5\times10^6$ rad/s, and at −60 dB/decade beyond.

- **Unity-gain frequency.** Since $\omega\gg100$, $|\mathscr{R}|\approx5\times10^4/\omega$, so $\omega_u\approx5\times10^4$ rad/s. The exact value is $4.99\times10^{4}$ rad/s ($f_u=7.95$ kHz), where
$$
\angle\mathscr{R}=-\arctan\frac{\omega_u}{100}-\arctan\frac{\omega_u}{10^6}-\arctan\frac{\omega_u}{5\times10^6}=-89.9^\circ-2.9^\circ-0.6^\circ=-93.3^\circ,
$$
so the phase margin is $86.7^\circ$.
- **Gain margin.** The phase reaches −180° when the two upper poles together add 90°, which happens at $\omega=\sqrt{10^6\cdot5\times10^6}=2.24\times10^6$ rad/s (356 kHz). There $|\mathscr{R}|=0.0083$, so the gain margin is $-20\log_{10}0.0083=41.6$ dB.

| Quantity | Direct | ngspice (combined injections) |
|---|---|---|
| Unity-gain frequency | $4.99\times10^{4}$ rad/s (7.95 kHz) | 7.947 kHz |
| Phase at $f_u$ / phase margin | −93.3° / 86.7° | −93.3° / 86.7° |
| −180° frequency | $2.24\times10^{6}$ rad/s (356 kHz) | 355.9 kHz |
| Gain margin | 41.6 dB | 41.6 dB |

The simulated return ratio is identical to the one obtained by breaking the loop at the controlled source. This confirms that the two injections, combined with complex arithmetic, measure the true return ratio without disturbing the dc operating point.
