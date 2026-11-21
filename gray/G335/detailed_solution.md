# Detailed solution - G335

The two-stage model has two poles and a right-half-plane zero from feedforward through $C$. With frequency-independent feedback $f$, the closed-loop poles are the roots of $D(s)+f\,a_0(1-sC/g_m)=0$, a quadratic whose $s$ coefficient shrinks as $f$ grows. Because of the zero, the poles do not just split apart: they meet, become complex, and bend toward the right half-plane on a circle centred on the zero. Compute the open-loop data, then the break-away point, the unity-feedback poles, and the value of $f$ that would reach the $j\omega$ axis.

### Step 1 — Open-loop gain

With $i_s=g_mv_{id}$ driving the circuit of [Fig. 1], the given transfer function gives
$$
a(s)=\frac{v_o}{v_{id}}=\frac{g_m(g_m-sC)R_1R_2}{1+bs+as^2}=\frac{a_0\,(1-sC/g_m)}{1+bs+as^2},
$$
with
$$
\begin{aligned}
a_0&=g_m^2R_1R_2=(19.7\ \mathrm{mA/V})^2(6.67\ \mathrm{k\Omega})^2=1.73\times10^4,\\
b&=(C_2+C)R_2+(C_1+C)R_1+g_mR_1R_2C=5.34\times10^{-8}+1.753\times10^{-6}=1.806\times10^{-6}\ \mathrm s,\\
a&=R_1R_2(C_1C_2+CC_1+CC_2)=5.34\times10^{-16}\ \mathrm{s^2}.
\end{aligned}
$$
The open-loop poles are the roots of $1+bs+as^2$: $p_1=-5.54\times10^5$ rad/s and $p_2=-3.38\times10^9$ rad/s. The zero is at $z=+g_m/C=+9.85\times10^9$ rad/s.

### Step 2 — Closed-loop characteristic equation

The closed-loop poles satisfy $1+f\,a(s)=0$:
$$
as^2+\left(b-\frac{f\,a_0C}{g_m}\right)s+(1+f\,a_0)=0 .
$$
Since $a_0C/g_m=g_mR_1R_2C$, the $s$ coefficient equals $(C_2+C)R_2+(C_1+C)R_1+g_mR_1R_2C\,(1-f)$. The Miller term, which produces the wide pole splitting, is cancelled progressively as $f$ rises.

### Step 3 — Root-locus shape

The loop gain is $T=f a_0(1-s/z)/[(1-s/p_1)(1-s/p_2)]$. Because of the factor $(1-s/z)$, a real point lies on the locus when the number of real poles and zeros to its right is even. This gives two segments: between $p_2$ and $p_1$, and to the right of $z$.

- As $f$ increases, the two poles move toward each other and meet between $p_2$ and $p_1$.
- For two poles and one zero, the complex part of the locus is a circle centred on the zero. Its radius is
$$
r=\sqrt{(z-p_1)(z-p_2)}=\sqrt{(9.85\times10^9)(13.23\times10^9)}=1.14\times10^{10}\ \mathrm{rad/s}.
$$
- The circle meets the real axis at $z-r=-1.57\times10^9$ rad/s, the break-away point, and at $z+r=+2.13\times10^{10}$ rad/s, the break-in point.

The break-away occurs where the discriminant of the quadratic vanishes, $(b-fa_0C/g_m)^2=4a(1+fa_0)$, which gives $f=0.076$.

### Step 4 — Calibration and stability for $0\le f\le1$

Roots of the quadratic:

| $f$ | Closed-loop poles (rad/s) |
|---|---|
| 0.05 | $-2.60\times10^9$, $-6.2\times10^8$ |
| 0.076 | $-1.57\times10^9$ (double) |
| 0.1 | $-1.53\times10^9\pm j0.95\times10^9$ |
| 0.5 | $-0.87\times10^9\pm j3.93\times10^9$ |
| 1 | $-5.0\times10^7\pm j5.69\times10^9$ |

For a quadratic, all roots are in the left half-plane when all coefficients are positive. At $f=1$ the $s$ coefficient is still $(C_2+C)R_2+(C_1+C)R_1=5.34\times10^{-8}$ s $>0$, so the amplifier is stable for every $f$ from 0 to 1. With unity-gain feedback,
$$
s=\frac{-5.34\times10^{-8}\pm\sqrt{(5.34\times10^{-8})^2-4(5.34\times10^{-16})(1.73\times10^4)}}{2(5.34\times10^{-16})}=-5.0\times10^7\pm j5.69\times10^9\ \mathrm{rad/s},
$$
that is $-8.0\pm j905$ MHz, with damping ratio $\zeta=5.0\times10^7/5.69\times10^9=0.009$. The circuit is stable, but only barely: with unity feedback it would ring for hundreds of cycles.

![Root locus in units of 10⁹ rad/s: poles at −3.38 and about 0 meet at −1.57 (f = 0.076), then follow an arc of a circle centred on the RHP zero at +9.85; f = 1 gives −0.05 ± j5.69; the dashed continuation crosses the jω axis at f = 1.03](/q/G335/solution-root-locus.svg)

### Step 5 — Loop gain that causes instability

The poles reach the $j\omega$ axis when the $s$ coefficient becomes zero:
$$
f=\frac{b\,g_m}{a_0C}=\frac{1.806\times10^{-6}}{1.753\times10^{-6}}=1.03,\qquad f\,a_0=1.78\times10^4,
$$
where the poles are at $\pm j5.77\times10^9$ rad/s. Within the physical range $f\le1$, the amplifier is therefore stable. A loop gain only 3% above that of unity feedback, $T_0\approx1.78\times10^4$, would make it oscillate. For larger $f$, the pair would continue around the circle and rejoin the real axis at $+2.13\times10^{10}$ rad/s (at $f\approx14$). One branch would then end on the zero and the other go to $+\infty$.
