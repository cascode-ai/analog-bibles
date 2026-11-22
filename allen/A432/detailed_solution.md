# Detailed solution - A432

With finite op-amp gain, the inverting input is no longer an exact virtual ground and the output falls short of its ideal value by a factor $A\beta/(1+A\beta)$. The feedback factor $\beta$ depends on how many input resistors are switched in, so the error depends on the code; the worst case is full scale, and requiring that error to stay within half an LSB gives the minimum gain.

### Step 1 — Output with finite gain

The noninverting input is grounded, so $v_{out}=-A\,v_-$, i.e. $v_-=-v_{out}/A$. Closed switches connect their resistors to $V_{REF}$; open switches leave them floating. KCL at the inverting input:

$$
(V_{REF}-v_-)\sum_{i=0}^{3}\frac{b_i}{R_{i+1}}=\frac{v_--v_{out}}{R_0} .
$$

With $R_0\sum b_i/R_{i+1}=D=\sum b_i/2^{i+1}=k/16$, this gives

$$
D\,V_{REF}=(1+D)\,v_--v_{out}=-v_{out}\Bigl(1+\frac{1+D}A\Bigr)
\quad\Rightarrow\quad
v_{out}=-D\,V_{REF}\,\frac{A\beta}{1+A\beta},\qquad \beta=\frac1{1+D} .
$$

$\beta=R_0^{-1}/(R_0^{-1}+\sum b_i/R_{i+1})$ is the fraction of the output fed back to the inverting input through $R_0$ and the closed input resistors.

### Step 2 — Error versus code

The shortfall from the ideal output $-DV_{REF}$ is

$$
\varepsilon(D)=\frac{D\,V_{REF}}{1+A\beta}=\frac{D\,V_{REF}}{1+A/(1+D)} ,
$$

which increases with $D$: a larger code means both a larger ideal output and a smaller feedback factor. The largest error is at code 1111, $D=15/16$, $\beta=16/31$.

### Step 3 — Minimum gain

Requiring $\varepsilon\le\tfrac12\,\mathrm{LSB}=V_{REF}/32$ at full scale:

$$
\frac{15/16}{1+16A/31}\le\frac1{32}
\quad\Rightarrow\quad
1+\frac{16A}{31}\ge30
\quad\Rightarrow\quad
A_{vd}(0)\ge\frac{29\cdot31}{16}=56.2\ \mathrm{V/V}.
$$

The requirement is modest because the loop gain $A\beta$ only has to reduce the full-scale error to about 1/30. Since $\varepsilon\approx D(1+D)V_{REF}/A$ for large $A$, the error contains a component quadratic in the code, i.e. a true nonlinearity in addition to a gain error, which is why it is checked against the INL rather than removed by trimming the gain.
