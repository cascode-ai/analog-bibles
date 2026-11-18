$|V_{OS}| \approx 31$ mV。

- 每一侧电流为 50 µA。$V_{ovN} = \sqrt{2(50\ \mu)/(194\ \mu\times10)} = 0.227$ V，$|V_{ovP}| = \sqrt{2(50\ \mu)/(64.7\ \mu\times30)} = 0.227$ V。
- 输出为 $V_{SUP} - |V_{GS3}|$ 时，$V_{DS3} = V_{DS4}$ 且 $V_{DS1} = V_{DS2}$，于是
  $V_{OS} \approx \Delta V_{t(1-2)} + \dfrac{V_{ovN}}{2}\left(\dfrac{\Delta V_{t(3-4)}}{|V_{ovP}|/2} + \dfrac{\Delta(W/L)_P}{(W/L)_P} - \dfrac{\Delta(W/L)_N}{(W/L)_N}\right)$。
- 最坏情况（各项绝对值相加）：$10\ \mathrm{mV} + 0.1135\ \mathrm{V}\times(0.0881 + 0.05 + 0.05) = 10 + 10 + 11.4 \approx 31$ mV。
