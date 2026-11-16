# Golden Solution - R661

## Reference answer

The closed-loop characteristic equation is $s^2 + \dfrac{I_PK_{VCO}R_P}{2\pi}s + \dfrac{I_PK_{VCO}}{2\pi C_P} = 0$. Let $K = I_PK_{VCO}/2\pi$: then $s^2 + KR_Ps + K/C_P = 0$, with $\omega_n^2 = K/C_P$ and $\zeta = \frac{R_P}{2}\sqrt{KC_P}$.
- K = 0: both poles are at the origin.
- Complex poles ($KR_P^2C_P < 4$, ζ < 1): $s = \sigma \pm j\omega$ with $\sigma = -KR_P/2$ and $\omega^2 = K/C_P - K^2R_P^2/4$. Eliminating K through $K = -2\sigma/R_P$ gives $\omega^2 = -\dfrac{2\sigma}{R_PC_P} - \sigma^2$, i.e., $\left(\sigma + \dfrac{1}{R_PC_P}\right)^2 + \omega^2 = \left(\dfrac{1}{R_PC_P}\right)^2$. This is a circle centred at $-1/(R_PC_P)$ with radius $1/(R_PC_P)$, passing through the origin. As K grows, σ moves left from 0, so the poles leave the origin vertically and travel along the circle.
- ζ = 1 ($K = 4/(R_P^2C_P)$): a double pole at $s = -KR_P/2 = -2/(R_PC_P)$, the leftmost point of the circle.
- Larger K: two real poles $s = \tfrac12\left(-KR_P \pm \sqrt{K^2R_P^2 - 4K/C_P}\right)$, with product $K/C_P$ and sum $-KR_P$. As K → ∞, one pole tends to $-(K/C_P)/(KR_P) = -1/(R_PC_P)$ (the loop zero) and the other to $-KR_P \to -\infty$.
- For complex poles, $|s| = \omega_n$ and $\cos\varphi = KR_P/(2\omega_n) = \zeta$. The poles therefore move toward the real axis (more damping) as $I_PK_{VCO}$ increases.

## Grading notes

+2: correct characteristic equation, and elimination of the gain showing that the complex poles satisfy $(\sigma + 1/R_PC_P)^2 + \omega^2 = (1/R_PC_P)^2$; plus the break-in point $-2/(R_PC_P)$ at ζ = 1 and the real-axis branches (one pole → $-1/(R_PC_P)$, the other → −∞). +1: circle proven, with the real-axis behaviour only asserted or partly missing. 0: correct characteristic equation and pole formula, with the circle only asserted (no elimination) or checked at a few points. -2 (asserted as fact): a wrong characteristic equation presented as proof (e.g., one without the $R_P$ term, which puts the poles on the jω axis for all gains), a circle centred at the origin, or the break-in point placed at $-1/(R_PC_P)$.
