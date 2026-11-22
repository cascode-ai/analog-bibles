# Detailed solution - A109

In the parallel form, $V_{REF}$ is a weighted sum of a PTAT voltage and a CTAT voltage, with weights $R_3/R_1$ and $R_3/R_2$. Because the three resistors have the same temperature dependence, these ratios are temperature independent. The zero-TC condition fixes the ratio of the two weights, $R_2/R_1$, and the required 1 V then fixes the overall scale $R_3$.

### Step 1 — Temperature derivatives of the two voltages

The PTAT voltage $V_{PTAT}=V_t\ln10$ is proportional to $T$:

$$
\frac{dV_{PTAT}}{dT}=\frac{V_{PTAT}}{T}=\frac{V_{t0}\ln10}{T_0}\quad\text{at }T_0,
\qquad V_{t0}\ln10=(0.026\ \mathrm V)(2.3026)=59.87\ \mathrm{mV}.
$$

Differentiating the CTAT model at $T=T_0$, where the derivative of $T\ln(T/T_0)$ equals 1, gives

$$
\left.\frac{dV_{CTAT}}{dT}\right|_{T_0}=-\frac{V_{G0}-V_{CTAT}(T_0)+(\gamma-\alpha)V_{t0}}{T_0}.
$$

### Step 2 — Zero-TC condition gives $R_2$

With temperature-independent resistor ratios,

$$
\frac{dV_{REF}}{dT}=\frac{R_3}{R_1}\frac{V_{t0}\ln10}{T_0}-\frac{R_3}{R_2}\frac{V_{G0}-V_{CTAT}+(\gamma-\alpha)V_{t0}}{T_0}=0 .
$$

$R_3$ and $T_0$ cancel, leaving

$$
\frac{R_2}{R_1}=\frac{V_{G0}-V_{CTAT}+(\gamma-\alpha)V_{t0}}{V_{t0}\ln10}
=\frac{1.205-0.6+2.2(0.026)\ \mathrm V}{0.05987\ \mathrm V}=\frac{0.6622}{0.05987}=11.06,
$$

so with $R_1=1$ kΩ, $R_2=11.06$ kΩ.

### Step 3 — Value of $V_{REF}$ with this ratio

Factor out $R_3/R_2$ and use the zero-TC ratio:

$$
V_{REF}=\frac{R_3}{R_2}\left[\frac{R_2}{R_1}V_{PTAT}+V_{CTAT}\right]
=\frac{R_3}{R_2}\left[V_{G0}+(\gamma-\alpha)V_{t0}\right]
=\frac{R_3}{R_2}\,(1.262\ \mathrm V).
$$

The bracket is the familiar bandgap value 1.262 V; the parallel form scales it by $R_3/R_2$, which can be smaller than 1. That is the advantage of this form for low-voltage references.

### Step 4 — Choose $R_3$ for 1 V

$$
\frac{R_3}{R_2}=\frac{1\ \mathrm V}{1.262\ \mathrm V}=0.792,
\qquad
R_3=0.792\times11.06\ \mathrm{k\Omega}=8.76\ \mathrm{k\Omega}.
$$

The design is $R_1=1$ kΩ, $R_2=11.06$ kΩ and $R_3=8.76$ kΩ. Check: $V_{REF}=(8.76)(0.05987\ \mathrm V)+(0.792)(0.6\ \mathrm V)=0.525+0.475=1.000$ V.
