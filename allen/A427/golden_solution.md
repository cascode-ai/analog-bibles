# Golden Solution - A427

## Reference answer

$v_{out} = V_{OS} - D(V_{REF} - V_{OS}) = 0.0645V_{REF} - 0.9355\,D\,V_{REF}$, with $D = b_0/2 + b_1/4 + b_2/8 + b_3/16 = k/16$: an offset of ≈ +1 LSB plus a gain reduced by the factor $1 - V_{OS}/V_{REF} = 0.9355$ (gain error ≈ −6.5 % ≈ −1/16).

- The inverting input sits at $V_{OS}$; each closed resistor carries $(V_{REF} - V_{OS})/R_{i+1}$, open ones carry nothing, so $(V_{OS} - v_{out})/R_0 = (V_{REF} - V_{OS})\sum b_i/R_{i+1}$. Equivalently, $V_{OS}$ is amplified by the code-dependent noise gain $1 + D$.
- Code 0000: $v_{out} = +0.0645V_{REF}$ (+1.03 LSB, opposite in sign to the signal); code 1000: −0.403 $V_{REF}$; code 1111: −0.8125 $V_{REF}$ (ideal −0.9375 $V_{REF}$). Steps are 0.9355 LSB; in LSB ($V_{REF}/16$) units $v_{out} = -(29k - 32)/31$.
- The characteristic stays linear and monotonic; the total error grows from 1.03 LSB at 0000 to exactly 2 LSB at 1111 ($V_{OS}\cdot31/16 = 0.125V_{REF}$).

## Grading notes

+2: offset ≈ +0.0645 $V_{REF}$ (≈ 1 LSB) at code 0000 and slope reduced to ≈ 0.935 of ideal (gain error ≈ 1/16), i.e. $v_{out} = V_{OS} - D(V_{REF} - V_{OS})$, full scale ≈ −0.81 $V_{REF}$; values within ±3 %. +1: correct offset and gain change with a slip in one value, or the sign convention unclear. 0: a pure offset of $V_{OS}$ with no gain change (code-dependent noise gain missed), or a constant offset of $31V_{OS}/16$ from treating open switches as grounded. −2 (asserted as fact): nonlinearity or nonmonotonicity claimed, a gain increase, or no effect of $V_{OS}$.
