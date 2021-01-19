// ==========================================================================
//  Squidex Headless CMS
// ==========================================================================
//  Copyright (c) Squidex UG (haftungsbeschraenkt)
//  All rights reserved. Licensed under the MIT license.
// ==========================================================================

using System.Diagnostics;
using System.Threading;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MimeKit;
using MimeKit.Text;
using Squidex.Domain.Apps.Core.HandleRules;
using Squidex.Domain.Apps.Core.Rules.EnrichedEvents;

namespace Squidex.Extensions.Actions.RabbitMq
{
    public sealed class RabbitMqActionHandler : RuleActionHandler<RabbitMqAction, RabbitMqJob>
    {
        public RabbitMqActionHandler(RuleEventFormatter formatter)
            : base(formatter)
        {
        }

        protected override async Task<(string Description, RabbitMqJob Data)> CreateJobAsync(EnrichedEvent @event, RabbitMqAction action)
        {
            var ruleJob = new RabbitMqJob
            {
                Description = action.Description
            };

            var description = $"Publish and event to the queue with description {action.Description}";

            return (description, ruleJob);
        }

        protected override async Task<Result> ExecuteJobAsync(RabbitMqJob job, CancellationToken ct = default)
        {
            Debug.WriteLine("The job is working: " + job.Description);
            return Result.Complete();
        }
    }

    public sealed class RabbitMqJob
    {
        public string Description { get; set; }
    }
}
