# Detailed solution - R578

**Approach.** Both transistors start discharging $C_H$ from 3 V toward the 0-V input, but differently. The NMOS has its source at the grounded input and a full 2.3-V overdrive throughout. The PMOS has its source at the falling output, so its gate–source voltage shrinks with $V_{out}$, and it switches off once $V_{out}$ drops to about $|V_{THP}|$. Split the transient into three phases, compute each (two by Simpson's rule, one exactly), and add them.

### Step 1 — Terminals and currents of the two transistors

**NMOS $M_1$.** The lower-potential terminal, the grounded input, is the source:

$$V_{GS} = 3\ \mathrm{V},\quad V_{SB} = 0\ (V_{THN} = 0.7\ \mathrm{V}),\quad V_{ov,N} = 2.3\ \mathrm{V},\quad V_{DS} = V_{out}.$$

With $\beta_n = 134\ \mu\mathrm{A/V^2}\times40 = 5.36$ mA/V²:

$$I_N = \begin{cases}\tfrac12\beta_n(2.3)^2 = 14.18\ \mathrm{mA}, & V_{out} \ge 2.3\ \mathrm{V},\\ \beta_n\left(2.3V_{out} - V_{out}^2/2\right), & V_{out} < 2.3\ \mathrm{V}.\end{cases}$$

**PMOS $M_2$.** The higher-potential terminal, the output node, is the source, so

$$V_{SG} = V_{out} - 0 = V_{out}, \qquad V_{SD} = V_{out} - 0 = V_{out},$$

and since $V_{SD} = V_{SG}$ it is **saturated whenever it conducts**. With $V_{BS} = V_{DD} - V_{out}$ and $\beta_p = 38.4\ \mu\mathrm{A/V^2}\times120 = 4.61$ mA/V²:

$$|V_{THP}| = 0.8 + 0.4\left(\sqrt{0.8 + 3 - V_{out}} - \sqrt{0.8}\right),$$

$$I_P = \tfrac12\beta_p\left(V_{out} - |V_{THP}|\right)^2 = (2.30\ \mathrm{mA/V^2})\left(V_{out} - |V_{THP}|\right)^2 .$$

**PMOS turn-off point.** $I_P = 0$ when $V_{out} = |V_{THP}(V_{out})|$. At $V_{out} = 1.10$ V, $|V_{THP}| = 0.8 + 0.4(\sqrt{2.70} - 0.894) = 0.8 + 0.4(1.643 - 0.894) = 1.10$ V ✓, so **the PMOS turns off at $V_{out} \approx 1.10$ V** (0.8 V without body effect), and below that only the NMOS discharges $C_H$.

### Step 2 — The governing equation and the three phases

$$C_H\frac{dV_{out}}{dt} = -(I_N + I_P) \quad\Longrightarrow\quad t = C_H\int_{V_{end}}^{V_{start}}\frac{dV}{I_N(V) + I_P(V)}.$$

| Phase | $V_{out}$ range | NMOS | PMOS |
|---|---|---|---|
| A | 3 V → 2.3 V | saturated | saturated |
| B | 2.3 V → 1.10 V | triode | saturated |
| C | 1.10 V → 1 mV | triode | off |

### Step 3 — Phase A (3 V → 2.3 V)

| $V_{out}$ | $\lvert V_{THP}\rvert$ | $I_N$ | $I_P$ | $I_N + I_P$ |
|---|---|---|---|---|
| 3.00 V | 0.800 V | 14.18 mA | $2.30(2.20)^2 = 11.15$ mA | 25.33 mA |
| 2.65 V | 0.871 V | 14.18 mA | $2.30(1.779)^2 = 7.29$ mA | 21.47 mA |
| 2.30 V | 0.932 V | 14.18 mA | $2.30(1.368)^2 = 4.31$ mA | 18.49 mA |

With Simpson's rule, $\int_a^b f\,dV \approx \frac{b - a}{6}[f(a) + 4f(m) + f(b)]$, applied to $f = 1/I$:

$$t_A = (1\ \mathrm{pF})\cdot\frac{0.7\ \mathrm{V}}{6}\left[\frac{1}{25.33} + \frac{4}{21.47} + \frac{1}{18.49}\right]\mathrm{mA^{-1}} = (0.1167)(0.2799)\ \mathrm{ns} = 32.7\ \mathrm{ps}$$

(the NMOS alone would need 49.4 ps for this phase).

### Step 4 — Phase B (2.3 V → 1.10 V)

| $V_{out}$ | $I_N = \beta_n(2.3V - V^2/2)$ | $\lvert V_{THP}\rvert$ | $I_P$ | Total |
|---|---|---|---|---|
| 2.30 V | 14.18 mA | 0.932 V | 4.31 mA | 18.49 mA |
| 1.70 V | $5.36(3.91 - 1.445) = 13.21$ mA | 1.022 V | $2.30(0.678)^2 = 1.06$ mA | 14.27 mA |
| 1.10 V | $5.36(2.529 - 0.605) = 10.31$ mA | 1.10 V | 0 | 10.31 mA |

$$t_B = (1\ \mathrm{pF})\cdot\frac{1.2\ \mathrm{V}}{6}\left[\frac{1}{18.49} + \frac{4}{14.27} + \frac{1}{10.31}\right]\mathrm{mA^{-1}} = (0.2)(0.4314)\ \mathrm{ns} = 86.3\ \mathrm{ps}.$$

The PMOS contribution is already small here (about 1 mA against more than 10 mA from the NMOS).

### Step 5 — Phase C (1.10 V → 1 mV): NMOS alone, exactly

With only the triode NMOS, $C_H\,dV/dt = -\frac{\beta_n}{2}V(2V_{ov} - V)$ with $V_{ov} = 2.3$ V; separating variables with $\frac{1}{V(2V_{ov} - V)} = \frac{1}{2V_{ov}}\left[\frac1V + \frac{1}{2V_{ov} - V}\right]$ gives

$$t_C = \frac{C_H}{\beta_nV_{ov}}\left[\ln\frac{V_1}{2V_{ov} - V_1} - \ln\frac{V_2}{2V_{ov} - V_2}\right],$$

with $C_H/(\beta_nV_{ov}) = 1\ \mathrm{pF}/(5.36\ \mathrm{mA/V^2}\times2.3\ \mathrm{V}) = 81.1$ ps. For $V_1 = 1.10$ V and $V_2 = 1$ mV:

$$
\begin{aligned}
\ln\frac{1.10}{4.6 - 1.10} &= \ln(0.3141) = -1.158,\\
\ln\frac{0.001}{4.6 - 0.001} &= \ln(2.174\times10^{-4}) = -8.434,\\
t_C &= 81.1\ \mathrm{ps}\times(-1.158 + 8.434) = 81.1\times7.276\ \mathrm{ps} = 590\ \mathrm{ps}.
\end{aligned}
$$

Most of the time is spent in this tail, whose time constant $C_H/[\beta_n(V_{DD} - V_{THN})] = 81$ ps is set by the NMOS alone.

### Step 6 — Total and comparison

$$t = t_A + t_B + t_C = 32.7 + 86.3 + 590 \approx 709\ \mathrm{ps} \approx 0.71\ \mathrm{ns}.$$

A direct numerical integration of $C_H\,dV_{out}/dt = -(I_N + I_P)$ gives the same 0.709 ns, with the PMOS turning off at $t \approx 0.12$ ns.

| Case | Time to reach 1 mV |
|---|---|
| NMOS alone (square law) | 0.733 ns |
| NMOS + PMOS, PMOS body effect included | **0.709 ns** |
| NMOS + PMOS, PMOS body effect ignored (off at 0.8 V) | 0.704 ns |
| NMOS as a fixed 81-Ω resistor, $\tau\ln 3000$ | 0.65 ns |

The PMOS speeds up the discharge by only about 3 %: it helps only while $V_{out}$ is high and is off during the long final settling. The complementary switch improves the on-resistance for inputs near $V_{DD}$, not for a 0-V input.

### Result

About **0.71 ns** (≈ 0.7 ns), only about 3 % faster than the NMOS alone (0.73 ns).

- The NMOS has its source at the grounded input (no body effect). It is saturated at 14.2 mA while $V_{out} > 2.3$ V, then in triode with $\beta_n = 5.36$ mA/V².
- The PMOS has its source on the $V_{out}$ side, with its gate at 0, so $V_{SG} = V_{SD} = V_{out}$ and it is saturated whenever on: $|I| = 2.30\ \mathrm{mA/V^2}\,(V_{out} - |V_{THP}|)^2$, with $|V_{THP}| = 0.8 + 0.4(\sqrt{3.8 - V_{out}} - \sqrt{0.8})$ rising from 0.8 V to about 1.10 V, where the PMOS turns off (after about 0.12 ns).
- The rest of the discharge, down to 1 mV, is done by the NMOS alone in triode, with time constant $C_H/[\beta_n(V_{DD} - V_{THN})] = 81$ ps.
- Phases: 33 ps (both saturated) + 86 ps (NMOS triode, PMOS fading) + 590 ps (NMOS only) ≈ 0.71 ns.

**Common mistake.** Using the parallel combination $R_{on,N} \parallel R_{on,P}$ for the whole transient, e.g. $81\ \Omega \parallel 99\ \Omega = 44.5\ \Omega$, giving $44.5\ \mathrm{ps}\times\ln 3000 \approx 0.36$ ns. Near $V_{out} = V_{in} = 0$ the PMOS has $V_{SG} \approx 0$ and is off, so the final settling is set by the NMOS alone.

**Common mistake.** Taking the input terminal as the PMOS source (so that it never conducts) or giving it a full 3-V gate drive throughout. Its source is the higher-potential output, so its drive $V_{SG} = V_{out}$ starts at 3 V and collapses as the capacitor discharges.

**Common mistake.** Forgetting the NMOS saturation interval and the triode nonlinearity, or adding a body effect to the NMOS. Its source is the grounded input ($V_{SB} = 0$) and its overdrive stays at 2.3 V.
