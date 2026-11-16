# Golden Solution - G175

## Reference answer

$|I_{C74}|\,I_{C75} = I_{REF}^2\,\dfrac{I_{S74}}{I_{S38}}\,\dfrac{I_{S75}}{I_{S37}} = (7.4\ \mu\mathrm{A})^2\times32\times10 \approx 1.75\times10^{-8}\ \mathrm{A^2}$ (17,500 μA²). With no load, $|I_{C74}| = I_{C75} \approx 132\ \mu$A. This is a classical constant-product class-AB law: the inactive transistor's current keeps falling as the load current grows, instead of being held at a minimum.

- Let $I = |I_{C43}| = |I_{E46}|$ (the same current flows through $R_{43}$, $Q_{43}$, $R_{46}$ and $Q_{46}$).
- Pbase is the base of $Q_{74}$, so $V_{EB74} = I R_{43} + V_{EB43}$, i.e. $IR_{43} = V_T\ln\dfrac{|I_{C74}|\,I_{S43}}{I_{S74}\,I}$.
- Base of $Q_{40}$: $V_{B40} = V_{BE75} + V_{EB46} + IR_{46}$ (Nbase is the base of $Q_{75}$). Base of $Q_{39}$: $V_{B39} = V_{BE37} + V_{EB38}$. The loop forces $V_{B40} = V_{B39}$:
  $IR_{46} = V_T\ln\dfrac{I_{REF}^2}{I_{S37}I_{S38}} - V_T\ln\dfrac{I_{C75}\,I}{I_{S75}I_{S46}}$.
- $R_{43} = R_{46}$, so the two logarithms are equal: $\dfrac{|I_{C74}|I_{S43}}{I_{S74}I} = \dfrac{I_{REF}^2 I_{S75}I_{S46}}{I_{S37}I_{S38}I_{C75}I}$. $I$ cancels, and with $I_{S46} = I_{S43}$,
  $|I_{C74}|I_{C75} = I_{REF}^2\dfrac{I_{S74}I_{S75}}{I_{S37}I_{S38}} = 54.8\ \mu\mathrm{A^2}\times320 = 17{,}500\ \mu\mathrm{A^2}$.

## Grading notes

+2: product ≈ $1.75\times10^{-8}$ A² (±5 %), from the two KVL loops with $R_{43} = R_{46}$ carrying the same current so that the resistor drops cancel, and the area ratios 32 and 10; noting the zero-load value ≈ 132 μA is a plus. +1: correct symbolic result $I_{REF}^2 I_{S74}I_{S75}/(I_{S37}I_{S38})$ with an arithmetic slip, or correct number with an incomplete derivation. 0: correct loop equations but the $I$ terms not cancelled (left as a function of $I$). -2 (asserted as fact): a minimum-selector result (e.g. "the smaller current is held at 180 μA") for this circuit, the product taken as $I_{REF}^2$ without area ratios, or ratios inverted ($I_{REF}^2/320$).
