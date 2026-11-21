# Detailed solution - G318

A zero of the transfer from $v_x$ to $v_o$ is a frequency at which the output node receives no net current from $v_x$, so $v_o$ stays at zero. Write the output-node equation, find where the $v_x$ terms cancel, and choose $R_Z$ to push that frequency to infinity.

### Step 1 — Output-node equation

In [Fig. 2], node $v_o$ connects to the controlled source $g_{m6}v_x$ (current out of the node), to $R_2\|C_2$, and through the series branch $Z_c=R_Z+1/(sC)$ to node $v_x$. KCL at $v_o$ gives
$$
g_{m6}v_x+\left(\frac1{R_2}+sC_2\right)v_o+\frac{v_o-v_x}{R_Z+1/(sC)}=0 .
$$
Collecting terms,
$$
\left(\frac1{R_2}+sC_2+\frac1{Z_c}\right)v_o=-\left(g_{m6}-\frac{1}{Z_c}\right)v_x .
$$

### Step 2 — Location of the zero

$v_o/v_x$ vanishes when $g_{m6}=1/Z_c=sC/(1+sCR_Z)$:
$$
g_{m6}(1+sCR_Z)=sC\quad\Rightarrow\quad
z=\frac{g_{m6}}{C(1-g_{m6}R_Z)}=\frac{1}{C\,(1/g_{m6}-R_Z)} .
$$
With $R_Z=0$, $z=+g_{m6}/C$ lies in the right half-plane. At high frequency the capacitor carries current $v_x\,sC$ into the output node, which opposes the current $g_{m6}v_x$ drawn out by the source, and the two cancel at $s=g_{m6}/C$.

### Step 3 — Value of $R_Z$

The zero moves to infinity when the denominator vanishes. Equivalently, at $s\to\infty$ the capacitor is a short, the branch current $v_x/R_Z$ exactly balances $g_{m6}v_x$, and no finite frequency gives cancellation:
$$
R_Z=\frac1{g_{m6}}=\frac1{2\ \mathrm{mA/V}}=500\ \Omega .
$$
A larger $R_Z$ makes $1/g_{m6}-R_Z<0$ and moves the zero into the left half-plane, where it can be used to cancel the second pole.
