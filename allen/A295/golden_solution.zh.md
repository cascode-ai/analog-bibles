$V_{ic}(\max) = V_{DD} - |V_{T5}|(\max) - \sqrt{\dfrac{I_7}{K'_PS_5}} - \sqrt{\dfrac{I_7}{K'_PS_3}} + V_{T1}(\min)$

$V_{ic}(\min) = V_{SS} + \sqrt{\dfrac{2I_7}{K'_NS_7}} + V_{T1}(\max) + \sqrt{\dfrac{I_7}{K'_NS_1}}$

ICMR $= V_{ic}(\max) - V_{ic}(\min)$。

- 每个输入器件流过 $I_7/2$，因此其过驱动电压为 $\sqrt{I_7/(K'_NS_1)}$；M7 流过 $I_7$，需要 $V_{DS7}(\mathrm{sat}) = \sqrt{2I_7/(K'_NS_7)}$。
- 下限：输入必须使 M7 保持饱和：$V_{ic} \ge V_{SS} + V_{DS7}(\mathrm{sat}) + V_{GS1}$，最坏情况对应最大阈值。
- 上限：M1 必须保持饱和，$V_{D1} \ge V_{ic} - V_{T1}$。在二极管连接的 M5 和共源共栅管 M3（均流过 $I_7/2$）保持饱和的前提下，M1 的漏极电压最高为 $V_{DD} - V_{SG5} - V_{SD3}(\mathrm{sat})$，因此 $V_{ic} \le V_{DD} - V_{SG5} - V_{SD3}(\mathrm{sat}) + V_{T1}$，最坏情况对应最大的 $|V_{T5}|$ 和最小的 $V_{T1}$。
