# Detailed solution - R022

**Approach:** Identify the lower-potential channel terminal, apply output KCL, and separate the MOS-only solution from the junction-dominated range.

### Model and terminal voltages

For a symmetric NMOS the operating source is the lower-potential channel terminal, regardless of the source marking in the drawing. In the MOS-only range the resistor pulls $V_{out}<2\,\mathrm V$, hence

$$V_G=V_D=2\,\mathrm V,\quad V_S=V_{out},\quad V_B=V_{in}.$$

Use the long-channel model with $\lambda=0$, $\beta=\mu_nC_{ox}W/L$ in $\mathrm{A/V^2}$, and

$$V_{TH}=V_{TH0}+\gamma(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}),\quad V_{SB}=V_{out}-V_{in}.$$

Because $V_{DS}=V_{GS}=2\,\mathrm V-V_{out}$, a positive-threshold, positive-overdrive MOS channel is saturated. This statement does not describe the later junction-driven regime.

### KCL, output level and slope

The saturation law $I_D=\beta(V_{GS}-V_{TH})^2/2$ and $I_D=V_{out}/R_1$ give

$$V_{out}+V_{TH}(V_{out}-V_{in})+\sqrt{\frac{2V_{out}}{\beta R_1}}=2\,\mathrm V.$$

The square root is positive. With the given $V_{TH0}=0.7\,\mathrm V$, $\gamma=0.45\,\mathrm{V^{1/2}}$ and $2|\phi_F|=0.9\,\mathrm V$, solve this scalar equation for each input. For example, at $V_{in}=0$, $\beta R_1=10\,\mathrm{V^{-1}}$ gives $V_{out}=0.75808\,\mathrm V$, $V_{TH}=0.85254\,\mathrm V$ and overdrive 0.38938 V. The light-load limit instead satisfies $V_{out}+V_{TH}=2\,\mathrm V$ and starts at 1.09181 V.

Define $g_m=\beta(V_{GS}-V_{TH})$, $\eta=\gamma/[2\sqrt{0.9\,\mathrm V+V_{SB}}]$ and $g_{mb}=\eta g_m$. Differentiating KCL gives

$$\frac{dV_{out}}{dV_{in}}=\frac{g_{mb}}{g_m+g_{mb}+1/R_1}.$$

The derivative is positive and below 1. In this model, as input rises, $\eta$ and $g_m$ increase; equivalently the derivative's denominator form $1+(1+1/(g_mR_1))/\eta$ decreases. Thus $d^2V_{out}/dV_{in}^2>0$ within the valid MOS segment.

### Junction limit and the required sketch

At $V_{in}=V_{out}$ the source–body junction has zero bias. The three illustrated branches reach this condition at about 0.881 V, 1.148 V and 1.300 V for $\beta R_1=10,100,\infty\,\mathrm{V^{-1}}$, respectively. The plotted curves stop there conservatively. For larger input the junction is forward biased; whether its current is negligible depends on load, junction parameters and temperature. Once the body is above 2 V, the junction to that fixed terminal is also forward biased. The square-root domain alone is not a physical validity test. Do not extend the curve using an assumed universal diode drop.

![Answer plot: transfer](/q/R022/solution-transfer.svg)
