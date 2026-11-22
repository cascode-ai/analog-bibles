# Detailed solution - G341

Apply the stated open-loop criterion: the difference-frequency beat from the phase detector, attenuated by the loop filter at that beat frequency, must be large enough to pull the VCO to the input. This gives an implicit inequality in $\Delta\omega=|\omega_i-\omega_{osc}|$, solved here numerically.

### Step 1 — Capture criterion

With the loop opened at the VCO input, the VCO runs at $\omega_{osc}$ and the phase error grows linearly in time, so the phase-detector output is a beat at the difference frequency $\Delta\omega$ with peak amplitude $(\pi/2)K_D$. The loop filter passes it with gain $|F(j\Delta\omega)|$, evaluated at the beat frequency, not at dc and not at the carrier. The VCO needs a control voltage $\Delta\omega/K_O$ to move to the input frequency. Capture is assumed when

$$
\frac{\pi}{2}K_D\,|F(j\Delta\omega)|\ \ge\ \frac{\Delta\omega}{K_O}
\quad\Longleftrightarrow\quad
\Delta\omega\ \le\ \frac{\pi}{2}K_OK_D\,|F(j\Delta\omega)|=1570.8\,|F(j\Delta\omega)|\ \mathrm{rad/s},
$$

using $K_OK_D=(10^3\ \mathrm{rad/(V\cdot s)})(1\ \mathrm{V/rad})=1000\ \mathrm{s^{-1}}$.

### Step 2 — Filter magnitude at the beat frequency

For the lag-lead network,

$$
|F(j\Delta\omega)|=\frac{\sqrt{1+(\Delta\omega/\omega_2)^2}}{\sqrt{1+(\Delta\omega/\omega_1)^2}},\qquad
\omega_1=7.61\ \mathrm{rad/s},\ \omega_2=116.5\ \mathrm{rad/s}.
$$

It falls from 1 at dc toward the high-frequency limit $\omega_1/\omega_2=0.0653$. The left side of the criterion, $\Delta\omega$, grows linearly, while the right side decreases, so there is a single boundary value.

### Step 3 — Solve for the boundary

Representative substitution at $\Delta\omega=135$ rad/s:

$$
|F(j135)|=\frac{\sqrt{1+(135/116.5)^2}}{\sqrt{1+(135/7.61)^2}}=\frac{\sqrt{2.343}}{\sqrt{315.7}}=\frac{1.531}{17.77}=0.0861,
\qquad 1570.8\times0.0861=135.3\ \mathrm{rad/s}.
$$

| $\Delta\omega$ (rad/s) | $\lvert F(j\Delta\omega)\rvert$ | $1570.8\lvert F\rvert$ (rad/s) | Capture? |
|---|---|---|---|
| 50 | 0.164 | 257 | yes |
| 100 | 0.100 | 157 | yes |
| 135 | 0.0861 | 135 | boundary |
| 200 | 0.0755 | 119 | no |

Solving the equality numerically gives $\Delta\omega=135.2$ rad/s.

### Step 4 — Capture range

The capture range is therefore

$$
|\omega_i-\omega_{osc}|\lesssim135\ \mathrm{rad/s}\ (\approx\pm21.5\ \mathrm{Hz}),
$$

i.e. input frequencies from about 99,865 to 100,135 rad/s around the $10^5$ rad/s center, a total width of about 270 rad/s. Replacing $|F|$ by its high-frequency asymptote $\omega_1/\omega_2$ would give the cruder estimate $1570.8\times0.0653\approx103$ rad/s; the exact magnitude is larger at 135 rad/s because the zero at 116.5 rad/s has not yet fully taken effect.

The lock range, set only by the phase-detector limit and the dc loop gain ($F(0)=1$), is $\pm(\pi/2)K_OK_D=\pm1571$ rad/s. The capture range is more than ten times narrower because the lag filter attenuates the beat note before it reaches the VCO.
