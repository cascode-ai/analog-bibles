# Detailed solution - G407

Split the single-ended source into DM and CM components. The ideal op amp with CMFB fixes the outputs: $v_{od}=-(R_3/R_1)v_{sd}$ and $v_{oc}=0$. The op-amp inputs are then found from KCL; they are equal ($V_{id}=0$) but are not held at zero, because the source common mode reaches them through the resistor network.

### Step 1 — DM and CM components of the source

With $V_{s1}=0.2\sin(100t)$ V and $V_{s2}=0$:

$$
V_{sd}=V_{s1}-V_{s2}=0.2\sin(100t)\ \mathrm V,\qquad
V_{sc}=\tfrac12(V_{s1}+V_{s2})=0.1\sin(100t)\ \mathrm V.
$$

### Step 2 — Outputs

With $a_{dm}\to-\infty$, $V_{i1}=V_{i2}$; with matched resistors, KCL at the two input nodes gives (as for any balanced inverting stage) $V_{od}=-(R_3/R_1)V_{sd}$, independent of $V_{sc}$. The CMFB loop sets $V_{oc}=0$, so the outputs are equal and opposite:

$$
\begin{aligned}
V_{od}(t)&=-\frac{5\ \mathrm{k\Omega}}{1\ \mathrm{k\Omega}}\,0.2\sin(100t)=-1.0\sin(100t)\ \mathrm V,\qquad V_{oc}(t)=0,\\
V_{o1}(t)&=V_{oc}+\tfrac12V_{od}=-0.5\sin(100t)\ \mathrm V,\qquad
V_{o2}(t)=V_{oc}-\tfrac12V_{od}=+0.5\sin(100t)\ \mathrm V.
\end{aligned}
$$

A single-ended input thus produces a fully balanced output.

### Step 3 — Op-amp input nodes

Let $V_{i1}=V_{i2}=V_i$. No current enters the op amp, so at the top input node

$$
\frac{V_{s1}-V_i}{R_1}=\frac{V_i-V_{o1}}{R_3}
\;\Rightarrow\;
V_i=\frac{R_3V_{s1}+R_1V_{o1}}{R_1+R_3}=\frac{5V_{s1}+V_{o1}}{6}
=\frac{(1.0-0.5)\sin(100t)}{6}=0.0833\sin(100t)\ \mathrm V.
$$

Check at the bottom input node ($V_{s2}=0$): the current through $R_2$ is $(0-V_i)/1\ \mathrm{k\Omega}=-0.0833\sin(100t)$ mA, and through $R_4$ it is $(V_i-V_{o2})/5\ \mathrm{k\Omega}=(0.0833-0.5)\sin(100t)/5$ mA $=-0.0833\sin(100t)$ mA, equal as required.

### Step 4 — Summary of the waveforms

| Quantity | Waveform |
|---|---|
| $V_{o1}(t)$ | $-0.5\sin(100t)$ V |
| $V_{o2}(t)$ | $+0.5\sin(100t)$ V |
| $V_{od}(t)$ | $-1.0\sin(100t)$ V |
| $V_{oc}(t)$ | 0 |
| $V_{i1}(t)=V_{i2}(t)$ | $0.0833\sin(100t)$ V $=\tfrac1{12}\sin(100t)$ V |
| $V_{id}(t)$ | 0 |
| $V_{ic}(t)$ | $0.0833\sin(100t)$ V |

The op-amp inputs are a virtual short ($V_{id}=0$) but not a virtual ground: they carry an 83.3-mV common-mode signal, so the op amp must have enough input CM range and CM rejection to tolerate it.
