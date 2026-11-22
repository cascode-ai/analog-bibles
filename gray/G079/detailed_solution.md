# Detailed solution - G079

Model each transistor as $g_m v_{gs}$ in parallel with its own $r_o$. Treat each side as a half circuit driven by its gate voltage and by the tail voltage $v_t$, and solve it for its drain current. The two halves share the tail node, so with $r_{o1}\ne r_{o2}$ they are not independent. One KCL equation at that node, with $v_t$ kept as a single shared unknown, joins them. For the symmetric part this reduces to the usual differential half circuit (tail at ac ground) and common-mode half circuit ($2r_{\text{tail}}$ degeneration). The mismatch terms come from keeping the $v_t$ coupling. Write $R=R_1=R_2=10\ \mathrm{k\Omega}$, $\bar r_o=500\ \mathrm{k\Omega}$, $\Delta r_o=r_{o1}-r_{o2}=10\ \mathrm{k\Omega}$ and $G_t=1/r_{\text{tail}}$.

### Step 1 — Drain current of one half for a given tail voltage

Let $i_k$ ($k=1,2$) be the small-signal current flowing from drain to source in $M_k$. With $v_{gs}=v_{ik}-v_t$, $v_{ds}=v_{ok}-v_t$, and the supply at ac ground,

$$
i_k=g_m(v_{ik}-v_t)+\frac{v_{ok}-v_t}{r_{ok}},\qquad v_{ok}=-Ri_k .
$$

Eliminating $v_{ok}$ gives

$$
i_k=a_kv_{ik}-b_kv_t,\qquad a_k=\frac{g_mr_{ok}}{r_{ok}+R},\qquad b_k=\frac{1+g_mr_{ok}}{r_{ok}+R}.
$$

Here $a_k$ is the transconductance of a CS stage loaded by $R$. The coefficient $b_k$ is larger than $a_k$ because a rise of $v_t$ both cuts $v_{gs}$ and cuts $v_{ds}$. Note that $a_k-b_k=-1/(r_{ok}+R)$, the conductance of the path through $r_{ok}$ and $R$ alone.

| | $a_k$ (mA/V) | $b_k$ (mA/V) |
|---|---|---|
| $M_1$, $r_{o1}=505\ \mathrm{k\Omega}$ | 0.980583 | 0.982524 |
| $M_2$, $r_{o2}=495\ \mathrm{k\Omega}$ | 0.980198 | 0.982178 |

The differences are $a_1-a_2=3.845\times10^{-7}\ \mathrm{A/V}$ and $b_1-b_2=3.461\times10^{-7}\ \mathrm{A/V}$, and the sum is $B=b_1+b_2=1.96470\ \mathrm{mA/V}$.

### Step 2 — Couple the halves at the tail node

Both drain currents flow into $r_{\text{tail}}$: $i_1+i_2=G_tv_t$. Substituting Step 1,

$$
v_t=\frac{a_1v_{i1}+a_2v_{i2}}{B+G_t},\qquad B+G_t=1.96570\ \mathrm{mA/V}.
$$

The outputs follow from $v_{ok}=-Ri_k$. The tail equation turns the sum of the currents into $G_tv_t$:

$$
v_{oc}=-\frac R2(i_1+i_2)=-\frac{R\,v_t}{2r_{\text{tail}}},\qquad
v_{od}=-R(i_1-i_2)=-R\left[a_1v_{i1}-a_2v_{i2}-(b_1-b_2)v_t\right].
$$

So every common-mode output is set by how far the tail node moves.

### Step 3 — Differential input: $A_{dm}$ and $A_{dm-cm}$

Apply $v_{i1}=v_{id}/2$ and $v_{i2}=-v_{id}/2$. Then

$$
\frac{v_t}{v_{id}}=\frac{a_1-a_2}{2(B+G_t)}=\frac{3.845\times10^{-7}\ \mathrm{A/V}}{2(1.96570\ \mathrm{mA/V})}=9.78\times10^{-5}.
$$

The tail node is therefore an ac ground to within $10^{-4}$. The mismatch only shifts the two $a_k$ slightly.

$$
A_{dm}=-R\left[\frac{a_1+a_2}2-(b_1-b_2)\frac{v_t}{v_{id}}\right]
=-(10\ \mathrm{k\Omega})\left[0.980390\ \mathrm{mA/V}-3.4\times10^{-11}\ \mathrm{A/V}\right]=-9.804 .
$$

The correction term is negligible, so this is the differential half circuit: a CS stage with load $R\|r_o$,

$$
A_{dm}\approx-g_m(R\|\bar r_o)=-(1\ \mathrm{mA/V})(9.80\ \mathrm{k\Omega})=-9.80 .
$$

The common-mode output comes only from the small tail swing:

$$
A_{dm-cm}=-\frac{R}{2r_{\text{tail}}}\frac{v_t}{v_{id}}=-\frac{10\ \mathrm{k\Omega}}{2(1\ \mathrm{M\Omega})}(9.78\times10^{-5})=-4.9\times10^{-7}\approx0 .
$$

### Step 4 — Common-mode input: $A_{cm}$ and $A_{cm-dm}$

Apply $v_{i1}=v_{i2}=v_{ic}$. Then

$$
\frac{v_t}{v_{ic}}=\frac{a_1+a_2}{B+G_t}=\frac{1.96078\ \mathrm{mA/V}}{1.96570\ \mathrm{mA/V}}=0.99750 .
$$

The source follows the gate, so $v_{gs}$ changes by only $0.0025\,v_{ic}$.

$$
A_{cm}=-\frac{R}{2r_{\text{tail}}}\frac{v_t}{v_{ic}}=-\frac{10\ \mathrm{k\Omega}}{2(1\ \mathrm{M\Omega})}(0.99750)=-4.99\times10^{-3}.
$$

This is the common-mode half circuit with source degeneration $2r_{\text{tail}}$, $A_{cm}=-R\bar a/(1+2r_{\text{tail}}\bar b)$. Without $r_o$ it is $\approx-g_mR/(1+2g_mr_{\text{tail}})=-10/2001=-5.0\times10^{-3}$.

For the differential output, use $a_k-b_k=-1/(r_{ok}+R)$ to split each current into two parts:

$$
i_k=-\frac{v_{ic}}{r_{ok}+R}+b_k(v_{ic}-v_t).
$$

The first part is the current driven through $r_{ok}$ and $R$ because $v_{ds}$ falls by about $v_{ic}$ when the source rises. The second is the small $v_{gs}$ change acting through $b_k$. Both parts differ between the sides:

$$
\begin{aligned}
\frac{i_1-i_2}{v_{ic}}&=\left(\frac1{r_{o2}+R}-\frac1{r_{o1}+R}\right)+(b_1-b_2)\left(1-\frac{v_t}{v_{ic}}\right)\\
&=3.845\times10^{-8}\ \mathrm{S}+(3.461\times10^{-7}\ \mathrm{S})(0.00250)=3.932\times10^{-8}\ \mathrm{S},
\end{aligned}
$$

$$
A_{cm-dm}=-R\frac{i_1-i_2}{v_{ic}}=-(10\ \mathrm{k\Omega})(3.932\times10^{-8}\ \mathrm S)=-3.93\times10^{-4}.
$$

The conversion is dominated by the $r_o$ path, $\approx v_{ic}\,\Delta r_o/\bar r_o^{\,2}$ in current difference. The loads are matched, so all of it comes from the unequal $r_o$.

### Step 5 — Ideal tail source, $r_{\text{tail}}\to\infty$

With $G_t=0$, the tail equation forces $i_1+i_2=0$ for any input. By Step 2, $v_{oc}=0$:

$$
A_{cm}\to0,\qquad A_{dm-cm}\to0 .
$$

$A_{dm}$ stays at $-9.80$, because the tail node was already an ac ground for a differential input.

$A_{cm-dm}$ does not vanish. With $G_t=0$, $v_t/v_{ic}=(a_1+a_2)/(b_1+b_2)$, and Step 2 gives

$$
\begin{aligned}
A_{cm-dm}&=-R\left[(a_1-a_2)-(b_1-b_2)\frac{a_1+a_2}{b_1+b_2}\right]=-\frac{2R(a_1b_2-a_2b_1)}{b_1+b_2}\\
&=-\frac{2g_mR\,\Delta r_o}{(1+g_mr_{o1})(r_{o2}+R)+(1+g_mr_{o2})(r_{o1}+R)}
\approx-\frac{R\,\Delta r_o}{(\bar r_o+R)(\bar r_o+1/g_m)},
\end{aligned}
$$

using $a_1b_2-a_2b_1=g_m\Delta r_o/[(r_{o1}+R)(r_{o2}+R)]$. Numerically,

$$
A_{cm-dm}\to-\frac{2(1\ \mathrm{mA/V})(10\ \mathrm{k\Omega})(10\ \mathrm{k\Omega})}{(506)(505\ \mathrm{k\Omega})+(496)(515\ \mathrm{k\Omega})}=-3.91\times10^{-4}\approx-\frac{R\,\Delta r_o}{\bar r_o^{\,2}} .
$$

An ideal tail source fixes the sum of the drain currents, so the common-mode output disappears. The sources still follow $v_{ic}$, however, and the unequal $r_{o1}$ and $r_{o2}$ still carry unequal current changes. With the sum fixed, these appear as a purely differential current. Unlike load mismatch, $r_o$ mismatch therefore converts common mode into differential output even with an ideal tail source.

Summary at $r_{\text{tail}}=1\ \mathrm{M\Omega}$: $A_{dm}=-9.80$, $A_{cm}=-5.0\times10^{-3}$, $A_{cm-dm}=-3.9\times10^{-4}$, $A_{dm-cm}=-4.9\times10^{-7}\approx0$.
