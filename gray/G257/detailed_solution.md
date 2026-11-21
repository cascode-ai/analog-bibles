# Detailed solution - G257

Take the controlled source $g_{m1}v_{gs1}$ of $M_1$ as the reference. Find its return ratio $\mathcal R$ with the input source zeroed, the asymptotic gain $A_\infty$ ($g_{m1}\to\infty$) and the feedthrough $d$ ($g_{m1}=0$); combine them for the gain, and use Blackman's formula for the impedances.

### Step 1 — Device parameters

$g_m=\sqrt{2k'(W/L)I_D}=\sqrt{2(60\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})}=3.464$ mA/V and $r_o=1/(\lambda I_D)=50\ \mathrm{k\Omega}$. Each drain node has the resistance $R=5\ \mathrm{k\Omega}\parallel r_o=4545\ \Omega$, and a stage driving such a node has gain $-g_mR=-15.75$.

### Step 2 — Return ratio

Zero the input: an ideal current source is an open circuit, so the gate of $M_1$ connects only to $R_F$. Replace $g_{m1}v_{gs1}$ by a test current $i_t$ flowing from the drain of $M_1$ to ground. Then $v_{d1}=-i_tR$. $M_2$ inverts with gain $-15.75$. At the output, $R_F$ leads only to the open gate node, so it carries no current: the output node sees $R$ alone, $M_3$ also has gain $-15.75$, and $v_{gs1}=v_o$. The returned source value is $g_{m1}v_o$:

$$
v_o=(-g_mR)^2(-R\,i_t),\qquad
\mathcal R=-\frac{g_{m1}v_o}{i_t}=(g_mR)^3=15.75^3=3904 .
$$

The loop transmission is $\mathcal R=3904$.

### Step 3 — Asymptotic gain, feedthrough and transresistance

As $g_{m1}\to\infty$, $v_{gs1}\to0$, the gate of $M_1$ is a virtual ground and all of $i_i$ flows through $R_F$, so $A_\infty=-R_F=-10\ \mathrm{k\Omega}$.

With $g_{m1}=0$, $M_2$ and $M_3$ receive no signal; $i_i$ flows through $R_F$ into the output resistance $R$, so $d=+R=+4545\ \Omega$. Then

$$
\frac{v_o}{i_i}=A_\infty\frac{\mathcal R}{1+\mathcal R}+\frac{d}{1+\mathcal R}=(-10\ \mathrm{k\Omega})\frac{3904}{3905}+\frac{4545\ \Omega}{3905}=-9997.4\ \Omega+1.2\ \Omega=-9996\ \Omega .
$$

### Step 4 — Input and output impedance (Blackman)

Blackman's formula is $Z=Z(g_{m1}{=}0)\,[1+\mathcal R(\text{short})]/[1+\mathcal R(\text{open})]$.

- Input: with $g_{m1}=0$, the input sees $R_F$ in series with $R$, $Z_{in}(g_{m1}{=}0)=14.55\ \mathrm{k\Omega}$. Shorting the input forces $v_{gs1}=0$, so $\mathcal R(\text{short})=0$; with the input open, $\mathcal R(\text{open})=3904$.

$$
Z_{in}=\frac{14.55\ \mathrm{k\Omega}}{3905}=3.72\ \Omega .
$$

- Output: with $g_{m1}=0$, the output sees $R=4545\ \Omega$ ($R_F$ ends at the open gate). Shorting the output gives $v_{gs1}=0$, $\mathcal R(\text{short})=0$; otherwise $\mathcal R=3904$.

$$
Z_{out}=\frac{4545\ \Omega}{3905}=1.16\ \Omega .
$$

The return ratio 3904 differs from the two-port loop gain (2684 for this circuit) because the two-port method loads the forward path with $R_F$ at both ports, whereas here, with the input open, $R_F$ carries no current; both methods give the same gain and impedances.

### Step 5 — With a 1-kΩ source resistance

Now $R_S=1\ \mathrm{k\Omega}$ connects the gate of $M_1$ to ground. In the return-ratio calculation, $R_F+R_S=11\ \mathrm{k\Omega}$ loads the output, and the gate voltage is a divided-down copy of $v_o$:

$$
R_3=4545\ \Omega\parallel11\ \mathrm{k\Omega}=3216\ \Omega,\qquad v_{gs1}=v_o\frac{R_S}{R_S+R_F}=\frac{v_o}{11},
$$

$$
\mathcal R=(15.75)^2\,(g_mR_3)\,\frac1{11}=(248)(11.14)\frac1{11}=251 .
$$

With $g_{m1}=0$ the output sees $R_3=3216\ \Omega$, and shorting the output again kills the return, so

$$
Z_{out}=\frac{3216\ \Omega}{1+251}=12.8\ \Omega,
$$

about eleven times the value with an ideal current-source drive, because the source resistance diverts the fed-back current.
