# Detailed solution - G337

Derive the large-signal transfer characteristic of the pair from the exponential collector-current law, differentiate it to get the incremental slope, and find where that slope has fallen to 99 percent of its value at the origin.

### Step 1 — Large-signal transfer characteristic

In the forward-active region each collector current follows $I_c = I_S\exp(V_{BE}/V_T)$. With identical transistors the ratio of the two currents depends only on the difference of the base-emitter voltages, which is the differential input $V_{id}=V_{BE1}-V_{BE2}$:

$$
\frac{I_{c1}}{I_{c2}}=\exp\!\left(\frac{V_{id}}{V_T}\right).
$$

With base currents neglected, KCL at the common emitters gives $I_{c1}+I_{c2}=I_{EE}$. Solving the two equations,

$$
I_{c1}=\frac{I_{EE}}{1+e^{-V_{id}/V_T}},\qquad
I_{c2}=\frac{I_{EE}}{1+e^{V_{id}/V_T}},\qquad
\Delta I_c=I_{c1}-I_{c2}=I_{EE}\tanh\!\left(\frac{V_{id}}{2V_T}\right).
$$

### Step 2 — Slope of the transfer curve

The slope asked for is the derivative (the incremental transconductance of the pair), not the ratio $\Delta I_c/V_{id}$. With $x=V_{id}/2V_T$ and $d\tanh x/dx=\mathrm{sech}^2x$,

$$
\frac{d\Delta I_c}{dV_{id}}=\frac{I_{EE}}{2V_T}\,\mathrm{sech}^2\!\left(\frac{V_{id}}{2V_T}\right).
$$

Since $\mathrm{sech}^2 x\le 1$ with equality only at $x=0$, the slope is largest at the origin, $I_{EE}/2V_T$, and decreases symmetrically on both sides. A 1 percent difference therefore means the slope has dropped to 0.99 of the origin value:

$$
\mathrm{sech}^2 x=0.99 .
$$

### Step 3 — Solve for the input voltage

Invert the condition exactly:

$$
\cosh x=\frac{1}{\sqrt{0.99}}=1.005038,\qquad
x=\cosh^{-1}(1.005038)=0.10034 .
$$

For small $x$, $\mathrm{sech}^2x\approx1-x^2$, which gives $x^2=0.01$, $x=0.1$; the exact value differs by only 0.3 percent, confirming the result. Converting back,

$$
|V_{id}|=2V_T\,x=2(0.10034)\,V_T=0.2007\,V_T=0.2007\,(26\ \mathrm{mV})=5.22\ \mathrm{mV}.
$$

So the differential input must stay below about $0.20\,V_T\approx5.2$ mV in magnitude for the small-signal slope $I_{EE}/2V_T$ to hold within 1 percent. The characteristic is symmetric, so the same magnitude applies for positive and negative $V_{id}$.
