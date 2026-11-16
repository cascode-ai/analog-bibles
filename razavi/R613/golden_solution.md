# Golden Solution - R613

## Reference answer

With $u = V_m/(\zeta V_T)$: $I_D = I\exp(u\cos\omega t)$, so (to leading order in $u$)
- fundamental: $Iu = \dfrac{IV_m}{\zeta V_T}$ (more exactly $I(u + u^3/8)$);
- second harmonic: $\dfrac{Iu^2}{4} = \dfrac{IV_m^2}{4\zeta^2V_T^2}$, HD2 $= \dfrac{V_m}{4\zeta V_T}$;
- third harmonic: $\dfrac{Iu^3}{24} = \dfrac{IV_m^3}{24\zeta^3V_T^3}$, HD3 $= \dfrac{V_m^2}{24\zeta^2V_T^2}$;
- in general the n-th harmonic is $\approx I u^n/(2^{n-1}n!)$ (exactly $2I\,I_n(u)$, modified Bessel functions).
Output voltage $V_{DD} - R_DI_D$: each amplitude multiplied by $R_D$ (fundamental $g_mR_DV_m$ with $g_m = I/(\zeta V_T)$).
Derivation: $e^{u\cos\theta} = 1 + u\cos\theta + \tfrac{u^2}{2}\cos^2\theta + \tfrac{u^3}{6}\cos^3\theta + \dots$, with $\cos^2\theta = (1+\cos2\theta)/2$ and $\cos^3\theta = (3\cos\theta + \cos3\theta)/4$; the dc term rises to $I(1 + u^2/4)$.

## Grading notes

+2: fundamental $IV_m/(\zeta V_T)$, second harmonic $IV_m^2/(4\zeta^2V_T^2)$ (HD2 $= V_m/4\zeta V_T$), third harmonic $IV_m^3/(24\zeta^3V_T^3)$, and output amplitudes as $R_D$ times these (Bessel-function form accepted). +1: second and third harmonics right but the output-voltage scaling not stated, or only the first two harmonics given correctly. 0: correct expansion with a coefficient slip in one harmonic. -2 (asserted as fact): no even harmonics claimed for the single-ended stage, HD2 $= V_m/(2\zeta V_T)$ or another wrong coefficient from a wrong expansion, or square-law results presented for the subthreshold case.
