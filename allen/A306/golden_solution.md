# Golden Solution - A306

## Reference answer

About 0.5 mV: the residual offset must satisfy $|V_{OS}| \lesssim 2.5\ \mathrm{V}/5000 = 0.5$ mV (the linear input window is only ≈ 1 mV wide, ±0.5 mV around the point that gives $v_{OUT} = 0$).

- Open loop, $v_{OUT} = A_v(v_{IN} + V_{OS,res})$; with $v_{IN} = 0$ the output must stay inside ±2.5 V, so $|V_{OS,res}| < 2.5/5000 = 0.5$ mV.
- In practice the output saturates before the rails and some room is needed for the test signal, so the offset must be trimmed to a fraction of this (a few hundred µV or less); otherwise the op amp sits at one rail and the measured "gain" is meaningless.

## Grading notes

+2: ≈ 0.5 mV (supply magnitude divided by the gain), with the reasoning that the output must stay in its linear range. +1: "1 mV" given as the total linear input window (5 V span / 5000) without halving, or 0.5 mV without reasoning. 0: correct reasoning with an arithmetic slip. −2 (asserted as fact): offsets of several mV or more claimed acceptable, or the allowed offset computed by multiplying by the gain.
