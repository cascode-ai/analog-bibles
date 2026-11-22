# Detailed solution - A431

First choose the input resistors so that the inverting summer weights the bits as 1/2, 1/4, 1/8, 1/16. Then repeat the KCL with the inverting input held at $V_{OS}$: the offset is amplified by a noise gain that grows with the number of closed switches, so the worst case is code 1111, and requiring that error to stay within half an LSB gives the limit.

### Step 1 — Ideal design

With a virtual ground at the inverting input,

$$
v_{out}=-R_0V_{REF}\sum_{i=0}^{3}\frac{b_i}{R_{i+1}} .
$$

Matching $R_0/R_{i+1}=1/2^{i+1}$:

$$
R_1=2R_0,\qquad R_2=4R_0,\qquad R_3=8R_0,\qquad R_4=16R_0 .
$$

### Step 2 — Output with an input offset voltage

With $V_{OS}$ in series with the noninverting input, the inverting input sits at $V_{OS}$. Each closed switch now drives $(V_{REF}-V_{OS})/R_{i+1}$, open switches carry nothing, and the total flows through $R_0$:

$$
\frac{V_{OS}-v_{out}}{R_0}=(V_{REF}-V_{OS})\sum_{i=0}^{3}\frac{b_i}{R_{i+1}}
\quad\Rightarrow\quad
v_{out}=-D\,V_{REF}+(1+D)\,V_{OS},
$$

with $D=\sum b_i/2^{i+1}=k/16$. The error relative to the ideal output is $(1+D)V_{OS}$: the offset is multiplied by the noise gain $1+R_0\sum b_i/R_{i+1}=1+D$, which ranges from 1 at code 0000 to $31/16$ at code 1111.

### Step 3 — Limit on $V_{OS}$

The error is largest at code 1111. Requiring it to stay within $\tfrac12\,\mathrm{LSB}=V_{REF}/32$:

$$
\frac{31}{16}|V_{OS}|\le\frac{V_{REF}}{32}
\quad\Rightarrow\quad
\frac{|V_{OS}|}{V_{REF}}\le\frac1{62}=0.0161 .
$$

An offset voltage of $|V_{OS}|\ge V_{REF}/62\approx0.016V_{REF}$ therefore causes a conversion error. Without the noise gain the limit would appear to be $V_{REF}/32$, nearly twice as large; the code-dependent amplification of $V_{OS}$ halves the tolerable offset.
