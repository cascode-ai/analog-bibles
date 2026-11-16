# Golden Solution - R551

## Reference answer

$E_g/q + (4+m)V_T$ is the value of $V_{REF}$ at the single temperature $T_0$ at which the zero-TC condition was imposed. It is not a function describing $V_{REF}(T)$ of a given circuit, so it may not be differentiated with respect to $T$.
- The derivation solved $\partial V_{REF}/\partial T = 0$ at $T_0$ for $V_T\ln n$: $V_{T0}\ln n = E_g/q + (4+m)V_{T0} - V_{BE}(T_0)$, and substituted it back. Since $n$ is a fixed design constant, this equality holds only at $T_0$. At other temperatures $V_{BE}(T) + V_T\ln n$ is not equal to $E_g/q + (4+m)kT/q$.
- The "slope" $(4+m)k/q$ only tells how the zero-TC value would change if the circuit were redesigned (different $n$) for a different $T_0$: $dV_{REF}(T_0)/dT_0$, not $\partial V_{REF}/\partial T$.
- Actual behaviour (constant-current $V_{BE}$): $V_{REF}(T) = E_g/q + (4+m)(kT/q)[1 - \ln(T/T_0)]$, whose derivative $-(4+m)(k/q)\ln(T/T_0)$ vanishes at $T_0$. With $T_0 = 300$ K this is 1.1846 V at 300 K and ≈ 1.181 V at 200 K and 400 K: zero TC at $T_0$ with a small residual curvature.

## Grading notes

+2: explains that the expression holds only at the design temperature $T_0$ (obtained by imposing the zero-TC condition, which is valid at one temperature, with $\ln n$ fixed), so differentiating it with respect to $T$ is invalid. Its derivative describes how the zero-TC value moves with the chosen $T_0$. Showing $V_{REF}(T)$ with zero slope at $T_0$ is a plus. +1: right idea stated loosely (e.g., "the result is only valid at one temperature") without explaining why the derivative is meaningless. 0: vague answer (e.g., "approximations in the model") without identifying the $T_0$ issue. -2 (asserted as fact): accepts the argument (claims $V_{REF}$ really has TC ≈ $(4+m)k/q$), or blames the flaw on the TC of $E_g$ or on the value of $m$.
