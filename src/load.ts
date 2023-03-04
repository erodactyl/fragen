import Listr from "listr";

export default async function load<T>(
  promise: Promise<T>,
  title = ""
): Promise<T> {
  const tasks = new Listr(
    [
      {
        title,
        task: () => promise,
      },
    ],
    // @ts-ignore
    { clearOutput: true }
  );

  await tasks.run();

  return await promise;
}
