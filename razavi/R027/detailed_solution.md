# Detailed solution - R027

**Approach:** The stated circuit contains a floating two-node island after the switch opens. First derive the ideal KCL constraint, then state one explicit parasitic completion for the requested sketches.

### Ideal island and current definition

Let $i_C=C_1\,d(V_X-V_S)/dt$ flow from X to S. With channel-only conduction and no ground path,
$$I_X+i_C=0\quad\text{at X},\qquad I_X+i_C=I_1\quad\text{at S}.$$
These equations are inconsistent for $I_1\ne0$. Therefore the supplied data do not determine unique $V_X(t)$ and $I_X(t)$ waveforms.

Here $I_X$ denotes the conductive current entering the MOS drain terminal, excluding displacement current in an explicitly added drain-body capacitance. If a probe includes $C_{DB}$, its measured current is
$$I_{X,\mathrm{pin}}=I_X+C_{DB}\frac{dV_X}{dt}.$$
The distinction matters at the switching transient.

### Explicit physical completion

For an illustrative model, add $C_{px}$ and $C_{ps}$ from X and S to ground, grounded-body diode injections $j_X,j_S$, and define $I_{ch}$ from X to S:
$$
\begin{pmatrix}C_1+C_{px}&-C_1\\-C_1&C_1+C_{ps}\end{pmatrix}
\begin{pmatrix}\dot V_X\\\dot V_S\end{pmatrix}
=
\begin{pmatrix}j_X-I_{ch}\\j_S+I_{ch}-I_1\end{pmatrix},
$$
with
$$j_X=I_S(e^{-V_X/V_T}-1),\qquad j_S=I_S(e^{-V_S/V_T}-1),\qquad I_X=I_{ch}-j_X.$$
Use the symmetric square-law channel with the lower-potential terminal as source. For the example, take
$$V_b=1.5\,\mathrm V,\ I_1=0.10\,\mathrm{mA},\ C_1=1\,\mathrm{pF},\ C_{px}=C_{ps}=20\,\mathrm{fF},$$
$$\beta=1\,\mathrm{mA/V^2},\ V_{TH}=0.7\,\mathrm V,\ I_S=10^{-14}\,\mathrm A,\ V_T=25.85\,\mathrm{mV},\ \lambda=0.$$

### Approximate stages and checks

Before the floating island moves, the channel current needed by the source is approximately $I_1$. The initial source estimate is
$$V_S(0)\approx V_b-V_{TH}-\sqrt{2I_1/\beta}=0.353\,\mathrm V,$$
and $V_X(0)=V_S(0)+3\,\mathrm V$. When the switch opens, the common-mode slope is set mainly by the small ground capacitances,
$$\dot V_{\mathrm{cm}}\approx-\frac{I_1}{C_{px}+C_{ps}}=-2.5\,\mathrm{V/ns},$$
until diode or channel currents rebalance the nodes. This explains the rapid common-mode fall while the finite $C_1$ keeps $V_X-V_S$ continuous.

As $V_S$ falls, the channel overdrive increases. During the saturated part,
$$I_{ch}\approx\frac{\beta}{2}(V_b-V_S-V_{TH})^2,$$
and the capacitor relation gives the local slope
$$\dot V_X\approx-\frac{I_{ch}}{C_1}.$$
After the channel enters triode, its local small-signal resistance is approximately
$$R_{\mathrm{on}}\approx\frac{1}{\beta(V_b-V_S-V_{TH})},\qquad \tau\approx R_{\mathrm{on}}C_1,$$
but these are only stage estimates for the chosen completion. They do not define a universal waveform.

Numerically integrating the stated example gives $V_X=2.203\,\mathrm V$, $V_S=-0.589\,\mathrm V$, and $I_X=0.964\,\mathrm{mA}$ at $0.45\,\mathrm{ns}$. At the illustrative DC point,
$$V_X=-0.564\,\mathrm V,\quad V_S=-0.586\,\mathrm V,\quad I_X=0,\quad I_{ch}=j_X\approx0.0300\,\mathrm{mA},$$
so $C_1$ retains about $21.85\,\mathrm{mV}$. A nonzero internal channel current can coexist with zero total drain-terminal current.

### Compliance and low-bias limits

If the current source loses compliance near $V_S=0$, the source may stop descending and the waveforms terminate earlier. If $V_b\le V_{TH}$ for the relevant source voltage, the channel can remain off and the junction/parasitic path determines the response. Neither branch is fixed by the question.

![Answer plot: voltage](/q/R027/solution-voltage.svg)

![Answer plot: current](/q/R027/solution-current.svg)

### Limits of the sketch

The four plots are one explicitly parameterized completion. Junction areas, parasitic capacitances, body effect under forward bias, source compliance and the original figure's exact current-probe location are not supplied, so no unique pulse, clamp, final voltage or late-time current follows.
