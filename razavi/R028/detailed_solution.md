# Detailed solution - R028

**Approach:** Write the two capacitor KCL equations first. The given circuit leaves the floating two-node ideal model incomplete, so the waveform is conditional on an explicit junction and parasitic-capacitance model.

### Ideal KCL and the missing path

Let $i_C=C_1\,d(V_X-V_S)/dt$ flow from X to S. A channel-only model gives
$$I_X+i_C=0\quad\text{at X},\qquad I_X+i_C=I_1\quad\text{at S}.$$
For $I_1\ne0$ these equations conflict. Grounded-body junctions, ground parasitic capacitors, or current-source compliance must supply the missing path. Their parameters are not specified, so the question does not determine one unique pair of waveforms.

### One explicit physical completion

For a reproducible illustration, let $I_{ch}$ be channel current from X to S, and let $j_X,j_S$ be body-junction currents injected into X and S. With $C_{px}$ and $C_{ps}$ to ground,
$$
\begin{pmatrix}C_1+C_{px}&-C_1\\-C_1&C_1+C_{ps}\end{pmatrix}
\begin{pmatrix}\dot V_X\\\dot V_S\end{pmatrix}
=
\begin{pmatrix}j_X-I_{ch}\\j_S+I_{ch}-I_1\end{pmatrix}.
$$
Use, for this example only,
$$j_X=I_S(e^{-V_X/V_T}-1),\qquad j_S=I_S(e^{-V_S/V_T}-1),$$
a constant threshold $V_{TH}=0.7\,\mathrm V$, $\lambda=0$, $\beta=1\,\mathrm{mA/V^2}$, $V_b=1.5\,\mathrm V$, $I_1=0.1\,\mathrm{mA}$, $C_1=1\,\mathrm{pF}$, $C_{px}=C_{ps}=20\,\mathrm{fF}$, $I_S=10^{-14}\,\mathrm A$, and $V_T=25.85\,\mathrm{mV}$. The current $I_X$ in the plots is the conductive current entering the drain terminal,
$$I_X=I_{ch}-j_X.$$
If a drain-body capacitance $C_{DB}$ is included at the measurement port, its displacement term $C_{DB}\dot V_X$ must be added with the chosen sign. The plotted definition excludes that unprovided element.

### Three physical stages in the example

Before turn-on, $I_{ch}\approx0$ and the current source is supplied mainly by the parasitic capacitors. The common-mode slope is approximately
$$\dot V_X\approx\dot V_S\approx-\frac{I_1}{C_{px}+C_{ps}},$$
until the source-body path begins to conduct. This is an approximation for the fast initial movement.

When $V_S$ is still positive and the channel is saturated, the source estimate is
$$V_S\approx V_b-V_{TH}-\sqrt{\frac{2I_1}{\beta}}=0.3528\,\mathrm V.$$
The channel current then gives the X-node slope
$$\dot V_X\approx-\frac{I_{ch}}{C_1},$$
while the small parasitic capacitances carry the common-mode adjustment. As $V_S$ falls, $I_{ch}$ grows and the waveform develops a current pulse.

After triode entry, use
$$I_{ch}=\beta(Ud-d^2/2),\qquad U=V_b-\min(V_X,V_S)-V_{TH},\quad d=|V_X-V_S|,$$
with the sign set by the lower-potential source terminal. The characteristic local time scale is
$$\tau_{\mathrm{tri}}\sim R_{\mathrm{on}}C_1,\qquad R_{\mathrm{on}}\approx[\beta U]^{-1},$$
but its value changes as $V_S$, $U$ and the junction currents change.

For the stated example, numerical integration gives $V_X=2.203\,\mathrm V$, $V_S=-0.589\,\mathrm V$, and $I_X=0.964\,\mathrm{mA}$ at $0.45\,\mathrm{ns}$. In the DC solution,
$$V_X=-0.564\,\mathrm V,\quad V_S=-0.586\,\mathrm V,\quad I_X=0,\quad I_{ch}=j_X\approx0.0300\,\mathrm{mA},$$
so $C_1$ retains about $21.85\,\mathrm{mV}$. A zero terminal current can coexist with nonzero internal channel current because the drain-body junction supplies it.

### Low-gate and current-source limits

If $3C_1\le V_{TH}C_2$, X reaches $V_X=0$ before or at channel turn-on. The initial trace is then the source-current ramp
$$V_X=3\,\mathrm V-\frac{I_1}{C_1}t,\qquad I_X\approx I_1,$$
with no positive-drain saturation plateau. Turn-on and body-junction conduction can occur after the zero crossing, and the later pulse depends on the added model.

If the current source loses compliance while $V_S$ is near 0 V, it can stop the downward motion earlier. A positive final capacitor voltage is then possible. Neither this endpoint nor a universal diode clamp follows from the supplied data.

![V_X and V_S versus time](/q/R028/solution-voltage.svg)

![I_X versus time](/q/R028/solution-current.svg)

![Negative-extension current tail](/q/R028/solution-current-tail.svg)

The figures are one explicit model completion. They are conditional examples rather than unique waveforms implied by the problem statement.
